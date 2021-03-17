import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';
import { Weapon } from 'app/domain/weapon';
import { HeroLifeService } from 'app/hero-controls/hero-life.service';

@Component({
  selector: 'combat-data-display',
  templateUrl: './combat-data-display.component.html',
  styleUrls: ['./combat-data-display.component.css']
})
export class CombatDataDisplayComponent implements OnInit {

  @Input()
  hero: Hero

  constructor(private service:HeroLifeService) { }

  ngOnInit() {
  }

  updateCurrentWeapon(weapon: Weapon) {
    return new Promise((resolve, reject) => {
      this.service.sendUpate({
          heroId: this.hero.id,
          type: 'setCurrentWeapon',
          weaponId: weapon.id
      })
      resolve(weapon)
		this.hero.currentWeapon = weapon
    }
  }

}
