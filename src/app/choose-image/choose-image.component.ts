import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { AdventureService, Adventure, Image } from './../domain/adventure.service'

export class ImagePopupData {
  constructor(public image: Image) {

  }
}


@Component({
  selector: 'app-choose-image',
  templateUrl: './choose-image.component.html',
  styleUrls: ['./choose-image.component.css'],
  providers: [AdventureService]
})
export class ChooseImageComponent implements OnInit {

  private images: Array<Image>
  private adventures: Array<Adventure>

  constructor(
    public adventureService: AdventureService,
    public dialogRef: MatDialogRef<ChooseImageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ImagePopupData) {
    this.images = []
  }

  ngOnInit() {
    this.adventureService.getAdventures().then(adventures => {
      this.adventures = adventures
      this.adventures.forEach(adventure => {
        this.images = this.images.concat(adventure.images)
      })
    })

  }

}

