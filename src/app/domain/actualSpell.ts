import { Spell } from "./spell";
import { SpellService } from "./spells.service";
import { SpellGroup } from "./spellgroup";
import { Hero } from './hero'

export class ActualSpell {

  value: number;
  hero: Hero;
  constructor(actualSpell: Object, hero: Hero, private spell: Spell, private spellGroup: SpellGroup) {
    this.value = actualSpell ? actualSpell['value'] : -7;
    this.hero = hero;
  }

  getSpell(): Spell {
    return this.spell;
  };

  getSpellGroup(): SpellGroup {
    return this.spellGroup;
  }

  get dice1Value(): Number {
    return this.hero.getAttributeValue(this.getSpell().dice1)
  }

  get dice2Value(): Number {
    return this.hero.getAttributeValue(this.getSpell().dice2)
  }

  get dice3Value(): Number {
    return this.hero.getAttributeValue(this.getSpell().dice3)
  }
}