import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActiveToast, Toast, ToastrService } from 'ngx-toastr';
// import { Rx } from 'rxjs';
import { Timer, TimerService } from 'app/domain/timer.service';
import { TimerDialogComponent } from 'app/timer-dialog/timer-dialog.component';
import { UrlService } from 'app/url.service';
import { Subject, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { take } from 'rxjs/operators';
import { OperationFactory, RemoteControlOperation, operationTypes } from './../domain/remoteControlOperation';
import { ImagePopupComponent } from './../image-popup/image-popup.component';



@Injectable()
export class RemoteControlReceiverService {

  private operationsMap: Map<string, Function> = new Map()
 

  private baseUrl: string
  private wsUrl = `${UrlService.getBaseURLWS()}/remoteControl`;
  public wsClientId = Math.random().toString(36).substring(7);
  private socket: WebSocket;
  private remoteControlReceiverSubject: Subject<MessageEvent>;
  private remoteControlReceiverSubscription: Subscription;
  private connectionInterval: number;

  private currentlyConnected: boolean = false;
  private timerDialogRef: MatDialogRef<TimerDialogComponent>
  private timerToaster: ActiveToast<Toast>;

  constructor(private http: Http, public dialog: MatDialog, private toastr: ToastrService, private timerService:TimerService) {

    this.baseUrl = UrlService.getBaseUrl();
    this.createWebsocket()

    this.operationsMap.set(operationTypes.openImage, (openImageOperation: RemoteControlOperation) => {
      const dialogRef = this.dialog.open(ImagePopupComponent, {
        // width: '250px',
        data: { url: this.baseUrl + openImageOperation.getParameter('url') }
      })
    })

    this.operationsMap.set(operationTypes.startTimer, (startTimerOperation:RemoteControlOperation) => {
      if(this.timerService.timer.running === false){
        const timerData:Timer = startTimerOperation.getParameters() as Timer
        this.timerService.timer.minutes = timerData.minutes
        this.timerService.timer.seconds = timerData.seconds
        this.timerService.timer.title = timerData.title
        this.timerService.startTimer(true)
        this.timerToaster = this.toastr.info(
          `Ihr könnt kurz nachdenken: \n${startTimerOperation.getParameter('minutes')} Minuten\n${startTimerOperation.getParameter('seconds')} Sekunden!`, 
          'Bedenkzeit', 
          {
            timeOut: this.timerService.timer.getTimerMilliseconds(),
            tapToDismiss: false,
            progressBar: true
          }
        )
        this.timerToaster.onTap.pipe(take(1))
        .subscribe(function(){
          
          this.timerDialogRef = this.dialog.open(TimerDialogComponent, {
            data: {timer: this.timerService.timer, timeRemaining: this.timerService.timeRemaining }
          })
          this.timerDialogRef.componentInstance.cancelDialog.subscribe(this.closeTimerDialog.bind(this))
          this.timerDialogRef.componentInstance.stopTimer.subscribe(() => {
            this.timerService.clearTimer()
            this.closeTimerDialog()
          })
        }.bind(this))
      }
    })

    this.operationsMap.set(operationTypes.timerFinished, (timerFinishedOperation:RemoteControlOperation) => {
      this.closeTimerDialog()
      this.timerService.stopTimer(false)
      if(this.timerToaster)
        this.toastr.clear(this.timerToaster.toastId)
      this.toastr.info('Die Zeit ist abgelaufen', `Time's Up!`)
    })
    this.operationsMap.set(operationTypes.timerStopped, (timerFinishedOperation:RemoteControlOperation) => {
      this.closeTimerDialog()
      this.timerService.stopTimer(false)
      if(this.timerToaster)
        this.toastr.clear(this.timerToaster.toastId)
      this.toastr.info(`Der Plan ist gefasst!`,'Geschafft')
    })
  }

  private closeTimerDialog():void {
    if(this.timerDialogRef)
      this.timerDialogRef.close()
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
        const instructionFunction = this.operationsMap.get(instruction.getType())
        instructionFunction.apply(this, [instruction])
        // this.operationsMap.get(instruction.getType()).apply(this, parameters)
      });

      this.socket.onmessage = (evt => 
        this.remoteControlReceiverSubject.next(evt)
      );

    } catch (error) {
      console.log('error setting up web socket with remote control receiver')
    }
  }



}

