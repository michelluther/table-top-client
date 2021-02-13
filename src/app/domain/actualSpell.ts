import { Spell } from "./spell";
import { SpellService } from "./spells.service";
import { SpellGroup } from "./spellGroup";
import { Hero } from './hero'

export class ActualSpell {

  value: number;
  hero: Hero;
  isAssignedToHero: boolean;

  constructor(actualSpell: Object, hero: Hero, private spell: Spell, private spellGroup: SpellGroup) {
    this.value = actualSpell ? actualSpell['value'] : -7;
    this.isAssignedToHero = actualSpell ? true : false;
    this.hero = hero;
  }

  getSpell(): Spell {
    return this.spell;
  };

  getSpellGroup(): SpellGroup {
    return this.spellGroup;
  }

  get dice1Value(): number {
    return this.hero.getAttribute(this.getSpell().dice1).value
  }

  get dice2Value(): number {
    return this.hero.getAttribute(this.getSpell().dice2).value
  }

  get dice3Value(): number {
    return this.hero.getAttribute(this.getSpell().dice3).value
  }
}