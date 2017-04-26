import { Injectable } from '@angular/core';
import { Hero } from './hero';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

	private heroesUrl = '/assets/characters.json/';
	private heroes: Hero[];

	constructor(private http: Http) { }

	getHeroes(): Promise<Hero[]> {
		return this.http.get(this.heroesUrl)
			.toPromise()
			.then(response => {
				console.log(response.json());
				return this.extractData(response);
			}
			)
			.catch(this.handleError);
	}

	extractData(res: Response): Hero[] {
		let body = res.json();
		let heroes = [];
		body.forEach(function(hero) {
			console.log(hero);
			var newHero = new Hero(hero);
			heroes.push(newHero);
		});
		return heroes;
	}

	handleError(error: Response | any) {
		console.log("ein Fehler!!!");
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
		return this.getHeroes()
			.then(heroes => heroes.find(hero => hero.id === id));
	}

}