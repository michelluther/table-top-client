import { Component, OnInit } from '@angular/core';
import { OperationFactory, operationTypes } from 'app/domain/remoteControlOperation';
import { RemoteControlService } from 'app/remote-control/remote-control.service';

@Component({
  selector: 'app-fight-setup',
  templateUrl: './fight-setup.component.html',
  styleUrls: ['./fight-setup.component.css']
})
export class FightSetupComponent implements OnInit {

  constructor(private remoteControlService:RemoteControlService) { }

  ngOnInit() {
  }

  createNPC() {
    this.remoteControlService.sendRemoteControlInstruction(OperationFactory.createOperation(operationTypes.createNPC, 'self', []))
  }

}
