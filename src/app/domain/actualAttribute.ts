import { Skill } from "./skill";
import { SkillService } from "./skills.service";
import { SkillGroup } from "./skillgroup";
import { Attribute } from './attribute'

export class ActualAttribute {

  valueNumber: number;
  attribute: Attribute;

  constructor(actualValue: number, attribute: Attribute) {
    this.valueNumber = actualValue;
    this.attribute = attribute;
  }


  get value(): number {
    return this.valueNumber
  }

  get name(): String {
    return this.attribute.name
  }

  get short(): String {
    return this.attribute.short
  }
}