import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';

@Component({
  selector: 'inventory-display',
  templateUrl: './inventory-display.component.html',
  styleUrls: ['./inventory-display.component.css']
})
export class InventoryDisplayComponent implements OnInit {


  @Input()
  hero: Hero

  constructor() { }

  ngOnInit() {
  }

}
