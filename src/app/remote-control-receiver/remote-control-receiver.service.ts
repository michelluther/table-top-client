import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MatDialog } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
// import { Rx } from 'rxjs';
import { UrlService } from 'app/url.service';
import { Subject, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { OperationFactory, operationTypes } from './../domain/remoteControlOperation';
import { ImagePopupComponent } from './../image-popup/image-popup.component';



@Injectable()
export class RemoteControlReceiverService {

  private operationsMap: Map<string, Function> = new Map([
    [operationTypes.openImage, (url: string) => {
      const dialogRef = this.dialog.open(ImagePopupComponent, {
        // width: '250px',
        data: { url: this.baseUrl + url }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    ]])


  private baseUrl: string
  private wsUrl = `${UrlService.getBaseURLWS()}/remoteControlReceiver`;
  public wsClientId = Math.random().toString(36).substring(7);
  private socket: WebSocket;
  private remoteControlReceiverSubject: Subject<MessageEvent>;
  private remoteControlReceiverSubscription: Subscription;
  private connectionInterval: number;

  private currentlyConnected: boolean = false;

  constructor(private http: Http, public dialog: MatDialog, private toastr: ToastrService) {

    this.baseUrl = UrlService.getBaseUrl();
    // this.createWebsocket()
  }

  private createWebsocket(): void {
    try {
      this.socket = new WebSocket(this.wsUrl);
      this.remoteControlReceiverSubject = new Subject();
      this.socket.onopen = (event) => {
        this.currentlyConnected = true;
        this.toastr.success('Du bist online.')
        clearInterval(this.connectionInterval)
      }
      this.socket.onerror = error => {
        if (this.socket.readyState === this.socket.OPEN) {
          this.toastr.error('Es gab einen Fehler', 'Wir schließen nun die Verbindung')
        }
      }
      this.socket.addEventListener('error', event => {
        console.log('hey')
        event.stopPropagation()
      }
      )
      this.socket.addEventListener('close', event => {
        if (this.currentlyConnected) {
          this.currentlyConnected = false;
          this.toastr.error('Du bist nicht mehr mit dem Server verbunden', 'Die Verbindung ist abgebaut worden')
          this.connectionInterval = window.setInterval(this.createWebsocket.bind(this), 4000)
        }
      })

      this.remoteControlReceiverSubscription = this.remoteControlReceiverSubject.subscribe((message) => {
        const instruction = OperationFactory.createOperationFromJSON(message.data);
        let parameters = instruction.getParameters();
        this.operationsMap.get(instruction.getType()).apply(this, instruction.getParameters())
      });
      this.socket.onmessage = (evt => this.remoteControlReceiverSubject.next(evt));

    } catch (error) {
      console.log('error setting up web socket with remote control receiver')
    }
  }



}

