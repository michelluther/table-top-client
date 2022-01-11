import { Component, OnInit } from '@angular/core';
import { RemoteControlReceiverService } from './remote-control-receiver.service'
import { Subject, Observable, Subscription, Observer } from 'rxjs/Rx';
import { OperationFactory, RemoteControlOperation, operationTypes } from './../domain/remoteControlOperation'



// import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'remote-control-receiver',
  templateUrl: './remote-control-receiver.component.html',
  styleUrls: ['./remote-control-receiver.component.css']
})
export class RemoteControlReceiverComponent implements OnInit {



  private service: RemoteControlReceiverService;

  constructor(websocketService: RemoteControlReceiverService,) {

    this.service = websocketService;
    
  }

  ngOnInit() {
  }

}
