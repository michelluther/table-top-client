import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { AdventureService, Adventure, Image } from './../domain/adventure.service'
import { RemoteControlService } from './../remote-control/remote-control.service'
import { OperationFactory, RemoteControlOperation, operationTypes } from './../domain/remoteControlOperation'

export class ImagePopupData {
  constructor(public image: Image, public imageList: Array<Image>) {

  }
}


@Component({
  selector: 'app-choose-image',
  templateUrl: './choose-image.component.html',
  styleUrls: ['./choose-image.component.css'],
  providers: [AdventureService, RemoteControlService]
})
export class ChooseImageComponent implements OnInit {

  public images: Array<Image>
  private adventures: Array<Adventure>
  private baseUrl: string

  constructor(
    public adventureService: AdventureService,
    public remoteControlService: RemoteControlService,
    public dialogRef: MatDialogRef<ChooseImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImagePopupData) {
    this.images = []
    this.baseUrl = 'http://' + window.location.hostname + ':8000';
  }

  ngOnInit() {
    this.adventureService.getAdventures().then(adventures => {
      this.adventures = adventures
      this.adventures.forEach(adventure => {
        this.images = this.images.concat(adventure.images)
      })
    })

  }

  public sendImage(image: Image): void {
    this.remoteControlService.sendRemoteControlInstruction(OperationFactory.createOperation(operationTypes.openImage,
      'all', [image.url, image.caption]))
  }

}

