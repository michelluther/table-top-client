import { Component, OnInit, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';
import { Skill } from 'app/domain/skill';
import { SkillService } from 'app/domain/skills.service'
import { WeaponService } from 'app/domain/weapons.service'
import { ArmorService } from 'app/domain/armor.service'
import { InventoryService } from 'app/domain/inventory.service'
import { Weapon } from 'app/domain/weapon';
import { InventoryItem } from 'app/domain/inventoryItem';
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
  newInventoryItem: InventoryItem

  public selectedSkillId: number

  public showAddWeaponSheet: boolean = false
  public showAddArmorSheet: boolean = false
  public showAddInventorySheet: boolean = false
  private _addWeapon: Weapon
  private _weaponToDelete: Weapon
  private _armorToDelete: Armor
  private _inventoryItemToDelete: InventoryItem


  private deletionDialogRef: MatDialogRef<ConfirmDeletionComponent>


  public weaponSkills: Skill[]

  constructor(private skillService: SkillService, private weaponService: WeaponService, private armorService: ArmorService ,private inventoryService:InventoryService, private dialog: MatDialog) { 
    
  }

  ngOnInit() {
    this.skillService.getWeaponSkills().then(weaponSkills => {
      this.weaponSkills = weaponSkills;
      this.newWeapon = new Weapon(null, 'new weapon', 1, 4, 14, this.weaponSkills[0])
      this.newArmor = new Armor(null, 'Neue Rüstung', 2, 2),
      this.newInventoryItem = new InventoryItem(null, 'Neues Ding', 1, 1)
    })
    
  }

  /** weapon maintenance */
  addWeaponToInventory(): void {
    this.showAddWeaponSheet = true
  }

  addWeapon(): void {
    const selectedSkillId = this.selectedSkillId;
    const skill = this.weaponSkills.find(weaponSkill => {
      return weaponSkill.id == selectedSkillId
    })
    this.newWeapon.skill = skill;
    this.weaponService.addWeapon(this.newWeapon, this.hero)
    this.showAddWeaponSheet = false;
  }
  
  cancelAddWeaponToInventory(): void {
    this.showAddWeaponSheet = false
  }

  removeWeaponFromInventory(weapon: Weapon): void {
    this._weaponToDelete = weapon
    this.deletionDialogRef = this.dialog.open(ConfirmDeletionComponent, {data: new ConfirmationData('Möchtest Du das Ding wegwerfen?', 'Es handelt sich dabei um die Waffe <strong>"' + weapon.name + '"</strong>')} )
    this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteWeapon.bind(this))
    this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this))
  }

  deleteWeapon():void {
    this.weaponService.deleteWeapon(this._weaponToDelete, this.hero);
    this.deletionDialogRef.close();
  }

  /** armor maintenance*/

  addArmorToInventory(): void {
    this.showAddArmorSheet = true
  }

  removeArmorFromInventory(armor: Armor): void {
    this._armorToDelete = armor
    this.deletionDialogRef = this.dialog.open(ConfirmDeletionComponent, {data: new ConfirmationData('Möchtest Du die Rüstung wegwerfen?', 'Es handelt sich dabei um die das Rüstungsteil <strong>"' + armor.name + '"</strong>')} )
    this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteArmor.bind(this))
    this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this))
  }
  
  cancelAddArmorToInventory(): void {
    this.showAddArmorSheet = false
  }
  
  addArmor(): void {
    this.armorService.addArmor(this.newArmor, this.hero)
    this.showAddArmorSheet = false
  }

  deleteArmor():void {
    this.armorService.deleteArmor(this._armorToDelete, this.hero);
    this.deletionDialogRef.close();
  }

  /** general inventory maintenance */
  

  addInventoryToInventory():void {
    this.showAddInventorySheet = true;
  }

  addInventory():void {
    this.inventoryService.addInventory(this.newInventoryItem, this.hero)
    this.showAddInventorySheet = false;
  }

  cancelAddInventoryToInventory():void {
    this.showAddInventorySheet = false;
  }

  removeInventoryItemFromInventory(inventoryItem:InventoryItem): void {
    this._inventoryItemToDelete = inventoryItem
    this.deletionDialogRef = this.dialog.open(ConfirmDeletionComponent, {data: new ConfirmationData('Brauchst Du das Stück nicht mehr?', 'Es handelt sich dabei um <strong>"' + inventoryItem.name + '"</strong>')} )
    this.deletionDialogRef.componentInstance.confirm.subscribe(this.deleteInventory.bind(this))
    this.deletionDialogRef.componentInstance.cancel.subscribe(this.cancelDeletion.bind(this))
  }

  deleteInventory():void {
    this.inventoryService.deleteInventory(this._inventoryItemToDelete, this.hero)
    this.deletionDialogRef.close();
  }

  cancelDeletion():void {
    this.deletionDialogRef.close();
  }

}
