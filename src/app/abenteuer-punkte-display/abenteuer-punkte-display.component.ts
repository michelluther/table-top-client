import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';

@Component({
  selector: 'abenteuer-punkte-display',
  templateUrl: './abenteuer-punkte-display.component.html',
  styleUrls: ['./abenteuer-punkte-display.component.css']
})
export class AbenteuerPunkteDisplayComponent implements OnInit {

  @Input()
  hero: Hero

  constructor() { }

  ngOnInit() {
  }

}
