import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Skill } from './skill';

import { HeroLifeService } from 'app/hero-controls/hero-life.service';

import {ChangeDetectorRef} from '@angular/core';
import { Weapon } from './weapon';
import { Hero } from './hero';

@Injectable()
export class WeaponService {

  private weaponsUrl = 'http://' + window.location.hostname + ':8000/weapons/';
  

  private weapons: Weapon[];
  private weaponsPromise: Promise<Weapon[]>;

  

  constructor(private http: Http, private chRef: ChangeDetectorRef, private service:HeroLifeService) {
  }

  getWeapons(): Promise<Weapon[]> {
    if(this.weapons) {
      return new Promise(resolve => {
        resolve(this.weapons)
      })
    } else {
      if (!this.weaponsPromise) {
        this.weaponsPromise = this.http.get(this.weaponsUrl)
          .toPromise()
          .then(response => {
            this.weapons = this.extractWeapons(response);
            return this.weapons
          })
      }
      return this.weaponsPromise;
    }
  }

  extractWeapons(res: Response, skills: Skill[] = null): Weapon[] {
    let weapons = [];
    let body = res.json();
    
    body.forEach(weapon => {
      weapons.push(new Weapon(
        weapon['id'],
        weapon['name'],
        weapon['tp_dice'],
        weapon['tp_add_points'],
        weapon['extra_tp_from_kk']
        
        ));
    });
    return weapons;
  }

  addWeapon(weapon: Weapon, hero: Hero): Promise<Weapon> {
    return new Promise((resolve, reject) => {
      this.service.sendUpate({
          heroId: hero.id,
          type: 'addWeapon',
          skill: weapon.skill.id,
          weaponName: weapon.name,
          damageDice: weapon.damageDice,
          damageAddPoints: weapon.damageAddPoints,
          extraPointsFromKk: weapon.extraPointsFromKk
      })
      resolve(weapon)
  })}

  deleteWeapon(weapon: Weapon, hero: Hero): void {
    new Promise((resolve, reject) => {
      this.service.sendUpate({
          type: 'deleteWeapon',
          heroId: hero.id,
          weaponId: weapon.id
      })
      resolve(weapon)
    })
  }
  
}
