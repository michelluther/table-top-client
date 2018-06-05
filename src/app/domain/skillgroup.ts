import { Skill } from './skill';
import { ActualSkill } from './actualSkill';
import { SkillService } from './skills.service';

import { Component, ChangeDetectorRef } from '@angular/core';

export class SkillGroup {

  id: number;
  name: String;
  skills: Skill[];
  skillsPromise: Promise<ActualSkill[]>;
  hasThreeDices: Boolean;
  hasAttackParade: Boolean;
  isLongRangeWeaponSkill: Boolean;

  constructor(dataObject: Object, private chRef: ChangeDetectorRef) {
    this.name = dataObject['name'];
    this.id = dataObject['id'];
    if(this.id == 1 || this.id == 8){
      this.hasThreeDices = false;
    } else {
      this.hasThreeDices = true;
    }
    if(this.id == 1){
      this.hasAttackParade = true;
    } else {
      this.hasAttackParade = false;
    }
    if(this.id == 8){
      this.isLongRangeWeaponSkill = true;
    } else {
      this.isLongRangeWeaponSkill = false;
    }
  }

  setSkills(skills: Skill[]) {
    this.skills = skills;
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getSkillsPromise(): Promise<Object[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve([{ value: 1 }, { value: 2 }]), 1000)
    });;
  }

}