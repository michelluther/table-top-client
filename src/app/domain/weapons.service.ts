import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Skill } from './skill';

import { HeroLifeService } from 'app/hero-controls/hero-life.service';

import {Component, ChangeDetectorRef} from '@angular/core';
import { Weapon } from './weapon';
import { Hero } from './hero';

@Injectable()
export class WeaponService {

  private weaponsUrl = 'http://' + window.location.hostname + ':8000/weapons/';
  

  private weapons: Weapon[];
  private weaponsPromise: Promise<Weapon[]>;

  private _service: HeroLifeService;
  

  constructor(private http: Http, private chRef: ChangeDetectorRef, private service:HeroLifeService) {
    this._service = service
  }

  getWeapons(): Promise<Weapon[]> {
    if (!this.weaponsPromise) {
      this.weaponsPromise = this.http.get(this.weaponsUrl)
        .toPromise()
        .then(response => {
          return this.extractWeapons(response);
        })
    }
    return this.weaponsPromise;
  }

  extractWeapons(res: Response, skills: Skill[] = null): Weapon[] {
    let weapons = [];
    let body = res.json();
    
    body.forEach(weapon => {
      weapons.push(new Weapon(
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
      this._service.sendUpate({
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

}
