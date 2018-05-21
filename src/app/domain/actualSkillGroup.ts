import { Skill } from "./skill";
import { SkillService } from "./skills.service";
import { SkillGroup } from "./skillgroup";
import { ActualSkill } from "./actualSkill";

export class ActualSkillGroup {

    constructor(private skillGroup:SkillGroup, private skills: ActualSkill[] ) { }

    getSkills(): ActualSkill[] {
        return this.skills;
    }
  }