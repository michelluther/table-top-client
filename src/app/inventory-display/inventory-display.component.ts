import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';
import { Skill } from 'app/domain/skill';
import { SkillService } from 'app/domain/skills.service'
import { WeaponService } from 'app/domain/weapons.service'
import { ArmorService } from 'app/domain/armor.service'
import { Weapon } from 'app/domain/weapon';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { Armor } from 'app/domain/armor';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmDeletionComponent, ConfirmationData } from 'app/confirm-deletion/confirm-deletion.component';

@Component({
  selector: 'inventory-display',
  templateUrl: './inventory-display.component.html',
  styleUrls: ['./inventory-display.component.css']
})
export class InventoryDisplayComponent implements OnInit {


  @Input()
  hero: Hero

  newWeapon: Weapon
  newArmor: Armor

  public selectedSkillId: number

  public showAddWeaponSheet: boolean = false
  public showAddArmorSheet: boolean = false
  private _addWeapon: Weapon
  private _weaponToDelete: Weapon
  private _armorToDelete: Armor

  private deletionDialogRef: MatDialogRef<ConfirmDeletionComponent>


  public weaponSkills: Skill[]

  constructor(private skillService: SkillService, private weaponService: WeaponService, private armorService: ArmorService ,private toastr: ToastrService, private dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.skillService.getWeaponSkills().then(weaponSkills => {
      this.weaponSkills = weaponSkills;
      this.newWeapon = new Weapon(null, 'new weapon', 1, 4, 14, this.weaponSkills[0])
      this.newArmor = new Armor(null, 'Neue Rüstung', 2, 2)
    })
    
  }

  addWeaponToInventory(): void {
    this.showAddWeaponSheet = true
  }

  removeWeaponFromInventory(weapon: Weapon): void {
    this._weaponToDelete = weapon
    this.deletionDialogRef = this.dialog.open(ConfirmDeletionComponent, {data: new ConfirmationData('Möchtest Du das Ding wegwerfen?', 'Es handelt sich dabei um die Waffe <strong>"' + weapon.name + '"</strong>')} )
    this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteWeapon.bind(this))
    this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this))
  }

  removeArmorFromInventory(armor: Armor): void {
    this._armorToDelete = armor
    this.deletionDialogRef = this.dialog.open(ConfirmDeletionComponent, {data: new ConfirmationData('Möchtest Du die Rüstung wegwerfen?', 'Es handelt sich dabei um die das Rüstungsteil <strong>"' + armor.name + '"</strong>')} )
    this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteArmor.bind(this))
    this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this))
  }
  
  addArmorToInventory(): void {
    this.showAddArmorSheet = true
  }

  cancelAddArmorToInventory(): void {
    this.showAddArmorSheet = false
  }
  
  cancelAddWeaponToInventory(): void {
    this.showAddWeaponSheet = false
  }

  addWeapon(): void {
    const selectedSkillId = this.selectedSkillId;
    const skill = this.weaponSkills.find(weaponSkill => {
      return weaponSkill.id == selectedSkillId
    })
    this.newWeapon.skill = skill;
    this.weaponService.addWeapon(this.newWeapon, this.hero)
  }

  addArmor(): void {
    this.armorService.addArmor(this.newArmor, this.hero)
  }

  deleteWeapon():void {
    this.weaponService.deleteWeapon(this._weaponToDelete, this.hero);
  }

  deleteArmor():void {
    this.armorService.deleteArmor(this._armorToDelete, this.hero);
  }

  cancelDeletion(): void {
    this.deletionDialogRef.close();
  }

}
