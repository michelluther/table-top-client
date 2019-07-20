import { Skill } from "./skill";
import { SkillService } from "./skills.service";
import { SkillGroup } from "./skillgroup";
import { Hero } from './hero'

export class ActualSkill {

  value: number;
  hero: Hero;
  isAssignedToHero: Boolean;

  constructor(actualSkill: Object, hero: Hero, private skill: Skill, private skillGroup: SkillGroup) {
    this.value = actualSkill ? actualSkill['value'] : -7;
    this.isAssignedToHero = actualSkill ? true : false;
    this.hero = hero;
  }

  getSkill(): Skill {
    return this.skill;
  };

  getAttack(): Number {
    return this.hero.getAttackOfWeaponSkill(this.skill);
  };

  getParade(): Number {
    return this.hero.getParadeOfWeaponSkill(this.skill);
  };

  getSkillGroup(): SkillGroup {
    return this.skillGroup;
  }

  get dice1Value(): Number {
    return this.hero.getAttributeValue(this.getSkill().dice1.id)
  }

  get dice2Value(): Number {
    return this.hero.getAttributeValue(this.getSkill().dice2.id)
  }

  get dice3Value(): Number {
    return this.hero.getAttributeValue(this.getSkill().dice3.id)
  }
}