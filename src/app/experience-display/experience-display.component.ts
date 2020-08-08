import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'experience-display',
  templateUrl: './experience-display.component.html',
  styleUrls: ['./experience-display.component.css']
})
export class ExperienceDisplayComponent implements OnInit {

  @Input()
  experience: string

  constructor() { }

  ngOnInit() {
  }

}
