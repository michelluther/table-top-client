import { Skill } from "./skill";
import { SkillGroup } from "./skillgroup";
import { SkillService } from "./skills.service";
import * as _ from 'lodash';
import { ActualSkill } from "./actualSkill";
import { ActualSkillGroup } from "./actualSkillGroup";
import { Component, ChangeDetectorRef } from '@angular/core';

export class Hero {

  id: number;

  name: String;
  race: Object;
  size: number;
  gender: String;

  culture: number;

  avatar_small: String;

  experience: number;

  mut: number;
  charisma: number;
  fingerfertigkeit: number;
  gewandheit: number;
  intuition: number;
  koerperkraft: number;
  konstitution: number;

  life: number;
  life_lost: number;
  experience_used: number;
  hero_type: Object;
  ini_basis: number;
  klugheit: number;
  magieresistenz: number;
  social_rank: number;

  attack_basis: number;
  parade_basis: number;

  skills: Array<ActualSkill>;
  skillGroups: ActualSkillGroup[];

  constructor(private skillService: SkillService) {
    this.skillService = skillService;
  };

  setData(dataObject: Object): Hero {
    this.attack_basis = dataObject['attack_basis'];
    this.parade_basis = dataObject['parade_basis'];

    this.life_lost = dataObject['life_lost'];
    this.avatar_small = dataObject['avatar_small'];

    this.charisma = dataObject['charisma'];
    this.culture = dataObject['culture'];
    this.experience = dataObject['experience'];
    this.experience_used = dataObject['experience_used'];
    this.fingerfertigkeit = dataObject['fingerfertigkeit'];
    this.gender = dataObject['gender'];
    this.gewandheit = dataObject['gewandheit'];
    this.hero_type = dataObject['hero_type'];
    this.id = dataObject['id'];
    this.ini_basis = dataObject['ini_basis'];
    this.intuition = dataObject['intuition'];
    this.klugheit = dataObject['klugheit'];
    this.koerperkraft = dataObject['koerperkraft'];
    this.konstitution = dataObject['konstitution'];
    this.life = dataObject['life'];
    this.magieresistenz = dataObject['magieresistenz'];
    this.mut = dataObject['mut'];
    this.name = dataObject['name'];
    this.race = dataObject['race'];
    this.size = dataObject['size'];
    // this.skills = dataObject['skills'];
    this.structureSkills(dataObject['skills']);
    this.social_rank = dataObject['social_rank']
    return this;
  }

  structureSkills(skills: Array<Object>): void {

    let skillsPromise = Promise.all([this.skillService.getSkillGroups(), this.skillService.getSkills()]).then(skillGroupsAndSkills => {
      this.skillGroups = new Array<ActualSkillGroup>();
      let skillGroups = skillGroupsAndSkills[0];
      let allSkills = skillGroupsAndSkills[1];
      this.skills = [];
      skills.forEach(skill => {
        let oneSkill = _.find(allSkills, finder => { return finder.id === skill['id'] })
        let skillSkillGroup = _.find(skillGroups, skillGroup => { return oneSkill.skillGroupId == skillGroup.id });
        this.skills.push(new ActualSkill(skill, oneSkill, skillSkillGroup));
      })
      skillGroups.forEach(skillGroup => {
        let skills = _.filter(this.skills, actualSkill => {
          return actualSkill.getSkill().skillGroupId == skillGroup.id
        });
        this.skillGroups.push(new ActualSkillGroup(skillGroup, skills));
      })
      
    });

  }


}