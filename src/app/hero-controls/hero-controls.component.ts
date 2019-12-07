import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hero } from '../domain/hero';
import { HeroLifeService } from './hero-life.service';
import { LifeDisplayComponent } from 'app/life-display/life-display.component';
import { MagicDisplayComponent } from 'app/magic-display/magic-display.component';


@Component({
	selector: 'hero-controls',
	templateUrl: './hero-controls.component.html',
	styleUrls: ['./hero-controls.component.css']
})
export class HeroControls {

	private _hero: Hero;
	private lifeDisplayNumber: Number;
	private service: HeroLifeService;

	@ViewChild(LifeDisplayComponent) lifeDisplay : LifeDisplayComponent;
	@ViewChild(MagicDisplayComponent) magicDisplay : MagicDisplayComponent; 


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
		return this.lifeDisplayNumber;
	}

	focusLife(): void {
		let element = 
	}

	focusMagic(): void {
		console.log('magic is important')
	}

	updateLife(value: number): void {
		this.lifeDisplay.rippleDisplay(value)
		this.service.sendLifeUpate({
			heroId: this._hero.id,
			oldLive: this.hero.currentLife,
			value: value
		});
	}

}
