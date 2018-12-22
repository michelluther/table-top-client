import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../domain/hero';
import { HeroLifeService } from './hero-life.service';

@Component({
	selector: 'hero-controls',
	templateUrl: './hero-controls.component.html',
	styleUrls: ['./hero-controls.component.css']
})
export class HeroControls {

	private _hero: Hero;
	private lifeDisplay: Number;
	private service: HeroLifeService;

	constructor(websocketService: HeroLifeService) {
		this.service = websocketService;
	}

	@Input()
	get hero() {
		return this._hero;
	}
	set hero(hero) {
		this._hero = hero;
	}

	@Input()
	get life() {
		return this.lifeDisplay;
	}

	updateLife(value: number): void {
		this.service.sendLifeUpate({
			heroId: this._hero.id,
			oldLive: this.lifeDisplay,
			value: value
		});
	}

}
