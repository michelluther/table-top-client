import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';
import { Skill } from 'app/domain/skill';
import { SkillService } from 'app/domain/skills.service'
import { WeaponService } from 'app/domain/weapons.service'
import { Weapon } from 'app/domain/weapon';
import { from } from 'rxjs';

@Component({
  selector: 'inventory-display',
  templateUrl: './inventory-display.component.html',
  styleUrls: ['./inventory-display.component.css']
})
export class InventoryDisplayComponent implements OnInit {


  @Input()
  hero: Hero
  @Input()
  newWeapon: Weapon
  public showAddWeaponSheet: boolean = false
  private _addWeapon: Weapon

  constructor(private skillService: SkillService, private weaponService: WeaponService) { 
    
  }

  ngOnInit() {
    this.skillService.getSkill(5).then(skill =>{
    this.newWeapon = new Weapon('new weapon', 1, 4, 14, skill)
  })}

  addWeaponToInventory(): void {
    this.showAddWeaponSheet = true
    
  }

  addWeapon(): void {
    this.weaponService.addWeapon(this.newWeapon, this.hero)
  }

}
