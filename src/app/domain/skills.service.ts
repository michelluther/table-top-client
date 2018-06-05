import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Skill } from './skill';
import { SkillGroup } from './skillgroup';

import {Component, ChangeDetectorRef} from '@angular/core';

@Injectable()
export class SkillService {

  private skillsUrl = 'http://' + window.location.hostname + ':8000/skills/';
  private skillTypesUrl = 'http://' + window.location.hostname + ':8000/skillTypes/';

  private skills: Skill[];

  private skillGroups: SkillGroup[];

  private skillGroupsPromise: Promise<SkillGroup[]>;
  private skillsPromise: Promise<Skill[]>;

  constructor(private http: Http, private chRef: ChangeDetectorRef) {
  }

  getSkills(): Promise<Skill[]> {
    if (!this.skillsPromise) {
      this.skillsPromise = this.http.get(this.skillsUrl)
        .toPromise()
        .then(response => {
          return this.extractSkills(response);
        })
    }
    return this.skillsPromise;
  }

  getSkillGroups(): Promise<SkillGroup[]> {
    if (!this.skillGroupsPromise) {
      this.skillGroupsPromise = this.http.get(this.skillTypesUrl)
        .toPromise()
        .then(response => {
          this.skillGroups = this.extractSkillTypes(response);
          return this.skillGroups;
        })
    }
    return this.skillGroupsPromise;
  }

  extractSkills(res: Response): Skill[] {
    let skills = [];
    let body = res.json();
    body.forEach(skill => {
      skills.push(new Skill(skill));
    });
    return skills;
  }

  extractSkillTypes(res: Response): SkillGroup[] {
    let skillTypes = [];
    let body = res.json();
    body.forEach(skillType => {
      skillTypes.push(new SkillGroup(skillType, this.chRef));
    });
    return skillTypes;
  }

  getSkill(id: Number): Promise<Skill> {
		return this.getSkills()
			.then(skills => 
				skills.find(skill => skill.id === id)
			);
  }
  
  getSkillGroup(id: Number):Promise<SkillGroup> {
    return this.getSkillGroups().then(
      skillGroups =>
        skillGroups.find(skillGroup => skillGroup.id === id)
    )
  }

}
