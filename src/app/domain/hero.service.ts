import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Attribute } from './attribute';
import { AttributeService } from './attribute.service';
import { Hero } from './hero';
import { SkillService } from './skills.service';
import { SpellService } from './spells.service';

import { UrlService } from 'app/url.service';



@Injectable()
export class HeroService {

	private heroesUrl = `${UrlService.getBaseUrl()}/characters/`;
	private _heroes: Hero[];
	private attributesConfigured: Attribute[]

	constructor(private http: HttpClient, private skillService: SkillService, private spellService: SpellService, private attributeService: AttributeService) {

	}

	getHeroes(force: boolean = false) : Promise<Hero[]> {
		if (this._heroes && !force) {
			return new Promise((resolve, reject) => {
				resolve(this._heroes)
			})
		} else {
			const characterGetPromise = this.http.get<any[]>(this.heroesUrl)
				.toPromise()
				.then(response => {
					if (!this._heroes) {
						this._heroes = [];
					}
					let heroes = this.extractData(response);
					for (let hero of heroes) {
						const bufferdHero = this._heroes ? this._heroes.find(h => h.id === hero.id) : null;
						if (bufferdHero) {
							Object.assign(bufferdHero, hero);
						} else {
							this._heroes.push(hero);
						}
					}
					this._heroes.sort((heroA, heroB) => {
						if(heroA.name > heroB.name)
							return 1
						else return -1
					})
					return this._heroes;
				}
				)

			characterGetPromise.catch(error => {
				console.log('error getting characters')
			})
			return characterGetPromise
		}
	}

	get heroes (): Hero[] {
		if (this._heroes) {
			return this._heroes;
		} else {
			return [];
		}
	}

	extractData(body: any[]): Hero[] {
		let heroes = [];
		body.forEach(function (hero) {
			var newHero = new Hero(this.skillService, this.spellService,
				this.attributeService).setData(hero);
			heroes.push(newHero);
		}.bind(this));
		return heroes;
	}

	handleError(error: any) {
		let errMsg: string;
		if (error.error instanceof ErrorEvent) {
			// Client-side or network error
			errMsg = error.error.message;
		} else {
			// Backend error
			errMsg = `${error.status}: ${error.error || error.message}`;
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

	getHero(id: number): Promise<Hero> {

		return new Promise((resolve, reject) => this.getHeroes()
			.then(heroes =>
				resolve(heroes.find(hero => hero.id === id))
			));
	}

	get attributes(): Array<Attribute> {
		return this.attributesConfigured
	}

}