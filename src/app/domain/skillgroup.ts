import { Skill } from './skill';
import { ActualSkill } from './actualSkill';
import { SkillService } from './skills.service';

import { Component, ChangeDetectorRef } from '@angular/core';

export class SkillGroup {

  id: number;
  name: String;
  skills: Skill[];
  skillsPromise: Promise<ActualSkill[]>;

  constructor(dataObject: Object, private chRef: ChangeDetectorRef) {
    this.name = dataObject['name'];
    this.id = dataObject['id'];
  }

  setSkills(skills: Skill[]) {
    this.skills = skills;
    console.log(this.getSkills());
  }

  getSkills(): Skill[] {
    return this.skills;
  }

  getSkillsPromise(): Promise<Object[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve([{ value: 1 }, { value: 2 }]), 1000)
    });;
  }

  hasThreeDices(): Boolean {
    console.log('you asked whether we have three dices ...')
    if(this.id == 1){
      return false;
    } else {
      return true;
    }
  }

}