import { Component, OnInit } from '@angular/core';
import { AdventureService, Adventure } from './../domain/adventure.service'

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css'],
  providers: [AdventureService]
})
export class AdminOverviewComponent implements OnInit {

  private adventures: Array<Adventure>

  constructor(public adventureService: AdventureService) {
    this.adventureService.getAdventures().then(adventures => {
      this.adventures = adventures
      console.log(this.adventures)
    })
  }

  ngOnInit() {
  }

  public sendImage(): void {

  }

}
