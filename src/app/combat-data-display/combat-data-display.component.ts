import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';
import { Weapon } from 'app/domain/weapon';

@Component({
  selector: 'combat-data-display',
  templateUrl: './combat-data-display.component.html',
  styleUrls: ['./combat-data-display.component.css']
})
export class CombatDataDisplayComponent implements OnInit {

  @Input()
  hero: Hero

  constructor() { }

  ngOnInit() {
  }

  updateCurrentWeapon(weapon: Weapon) {
		this.hero.currentWeapon = weapon
	}

}
