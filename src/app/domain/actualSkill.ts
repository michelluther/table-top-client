import { Skill } from "./skill";
import { SkillService } from "./skills.service";
import { SkillGroup } from "./skillgroup";

export class ActualSkill {

    value: number;
    constructor(dataObject: Object, private skill:Skill, private skillGroup:SkillGroup) { 
      this.value = dataObject['value'];
    }

    getSkill(): Skill {
        return this.skill;
    }

    getSkillGroup(): SkillGroup {
      return this.skillGroup;
    }
  }