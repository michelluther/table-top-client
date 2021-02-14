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

  public selectedSkillId: number

  public showAddWeaponSheet: boolean = false
  private _addWeapon: Weapon


  public weaponSkills: Skill[]

  constructor(private skillService: SkillService, private weaponService: WeaponService) { 
    
  }

  ngOnInit() {
    this.skillService.getWeaponSkills().then(weaponSkills => {
      this.weaponSkills = weaponSkills;
      this.newWeapon = new Weapon('new weapon', 1, 4, 14, this.weaponSkills[0])
    })
    
  }

  public addWeaponToInventory(): void {
    this.showAddWeaponSheet = true
    
  }

  addWeapon(): void {
    const skill = this.weaponSkills.find(weaponSkill => {
      return skill.id === this.selectedSkillId
    })
    this.newWeapon.skill = skill;
    this.weaponService.addWeapon(this.newWeapon, this.hero)
  }

}
