import { Skill } from "./skill";
import { SkillService } from "./skills.service";

export class ActualSkill {

    value: number;
    constructor(dataObject: Object, private skill:Skill) { 
      this.value = dataObject['value'];
    }

    getSkill(): Skill {
        return this.skill;
    }
  }