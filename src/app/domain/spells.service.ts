import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Spell } from './spell';
import { SpellGroup } from './spellGroup';

import { ChangeDetectorRef } from '@angular/core';
import { UrlService } from 'app/url.service';

@Injectable()
export class SpellService {

  private spellsUrl = `${UrlService.getBaseUrl()}/spells/`;
  private spellTypesUrl = `${UrlService.getBaseUrl()}/spellTypes/`;

  private spells: Spell[];

  private spellGroups: SpellGroup[];

  private spellGroupsPromise: Promise<SpellGroup[]>;
  private spellsPromise: Promise<Spell[]>;

  constructor(private http: Http, private chRef: ChangeDetectorRef) {
  }

  getSpells(): Promise<Spell[]> {
    if (!this.spellsPromise) {
      this.spellsPromise = this.http.get(this.spellsUrl)
        .toPromise()
        .then(response => {
          return this.extractSpells(response);
        })
    }
    return this.spellsPromise;
  }

  getSpellGroups(): Promise<SpellGroup[]> {
    if (!this.spellGroupsPromise) {
      this.spellGroupsPromise = this.http.get(this.spellTypesUrl)
        .toPromise()
        .then(response => {
          this.spellGroups = this.extractSpellTypes(response);
          return this.spellGroups;
        })
    }
    return this.spellGroupsPromise;
  }

  extractSpells(res: Response): Spell[] {
    let spells = [];
    let body = res.json();
    body.forEach(spell => {
      spells.push(new Spell(spell));
    });
    return spells;
  }

  extractSpellTypes(res: Response): SpellGroup[] {
    let spellTypes = [];
    let body = res.json();
    body.forEach(spellType => {
      spellTypes.push(new SpellGroup(spellType, this.chRef));
    });
    return spellTypes;
  }

  getSpell(id: number): Promise<Spell> {
		return this.getSpells()
			.then(spells => 
				spells.find(spell => spell.id === id)
			);
  }
  
  getSpellGroup(id: number):Promise<SpellGroup> {
    return this.getSpellGroups().then(
      spellGroups =>
        spellGroups.find(spellGroup => spellGroup.id === id)
    )
  }

}
