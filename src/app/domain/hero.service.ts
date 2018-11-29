import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { SkillService } from './skills.service';

import { HEROES } from './mock-heroes';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class HeroService {

	private heroesUrl = 'http://' + window.location.hostname + ':8000/characters/';
	private heroes: Hero[];

	constructor(private http: Http, private skillService: SkillService) { }

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
			.toPromise()
			.then(response => {
				return this.extractData(response);
			}
			)
	}

	extractData(res: Response): Hero[] {
		let body = res.json();
		let heroes = [];
		body.forEach(function (hero) {
			var newHero = new Hero(this.skillService).setData(hero);
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

	getHero(id: Number): Promise<Hero> {
		return new Promise((resolve, reject) => this.getHeroes()
			.then(heroes =>
				resolve(heroes.find(hero => hero.id === id))
			));
	}

}