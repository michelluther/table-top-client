import { Component, OnInit } from '@angular/core';
import { RemoteControlReceiverService } from './remote-control-receiver.service'
import { Subject, Observable, Subscription, Observer } from 'rxjs/Rx';
import { OperationFactory, RemoteControlOperation, operationTypes } from './../domain/remoteControlOperation'
import { ImagePopupComponent } from './../image-popup/image-popup.component'
import { MatDialog } from '@angular/material'


// import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'remote-control-receiver',
  templateUrl: './remote-control-receiver.component.html',
  styleUrls: ['./remote-control-receiver.component.css']
})
export class RemoteControlReceiverComponent implements OnInit {

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

  private service: RemoteControlReceiverService
  private remoteControlReceiverSubject: Subject<any>
  private remoteControlReceiverSubscription: Subscription
  private baseUrl: string

  constructor(websocketService: RemoteControlReceiverService, public dialog: MatDialog) {

    this.baseUrl = 'http://' + window.location.hostname + ':8000';
    this.service = websocketService;
    this.remoteControlReceiverSubject = websocketService.remoteControlReceiverSubject;
    this.remoteControlReceiverSubscription = websocketService.remoteControlReceiverSubject.subscribe((message) => {
      const instruction = OperationFactory.createOperationFromJSON(message.data);
      let parameters = instruction.getParameters();
      this.operationsMap.get(instruction.getType()).apply(this, instruction.getParameters())
    }
    );
  }

  ngOnInit() {
  }

}
