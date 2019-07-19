import { Spell } from './spell';

import { Component, ChangeDetectorRef } from '@angular/core';

export class SpellGroup {

  id: number;
  name: String;
  spells: Spell[];

  constructor(dataObject: Object, private chRef: ChangeDetectorRef) {
    this.name = dataObject['name'];
    this.id = dataObject['id'];
  }

  setSpells(skills: Spell[]) {
    this.spells = skills;
  }

  getSpells(): Spell[] {
    return this.spells;
  }

  getSpellsPromise(): Promise<Object[]> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve([{ value: 1 }, { value: 2 }]), 1000)
    });;
  }

}