import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Attribute } from './attribute';
import { AttributeService } from './attribute.service';
import { Hero } from './hero';
import { SkillService } from './skills.service';
import { SpellService } from './spells.service';

import { UrlService } from 'app/url.service';



@Injectable()
export class HeroService {

	private heroesUrl = `${UrlService.getBaseUrl()}/characters/`;
	private heroes: Hero[];
	private attributesConfigured: Attribute[]

	constructor(private http: Http, private skillService: SkillService, private spellService: SpellService, private attributeService: AttributeService) {

	}

	getHeroes(): Promise<Hero[]> {
		if (this.heroes) {
			return new Promise((resolve, reject) => {
				resolve(this.heroes)
			})
		} else {
			const characterGetPromise = this.http.get(this.heroesUrl)
				.toPromise()
				.then(response => {
					this.heroes = this.extractData(response);
					return this.heroes.sort((heroA, heroB) => {
						if(heroA.name > heroB.name)
							return 1
						else return -1
					})
				}
				)

			characterGetPromise.catch(error => {
				console.log('error getting characters')
			})
			return characterGetPromise
		}
	}

	extractData(res: Response): Hero[] {
		let body = res.json();
		let heroes = [];
		body.forEach(function (hero) {
			var newHero = new Hero(this.skillService, this.spellService,
				this.attributeService).setData(hero);
			heroes.push(newHero);
		}.bind(this));
		return heroes;
	}

	handleError(error: Response | any) {
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
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