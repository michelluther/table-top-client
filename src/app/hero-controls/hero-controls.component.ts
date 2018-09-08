import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../domain/hero.service';
import { Hero } from '../domain/hero';
import { HeroLifeService } from './hero-life.service';
import { Subject, Observable, Subscription, Observer } from 'rxjs/Rx';


@Component({
	selector: 'hero-controls',
	templateUrl: './hero-controls.component.html',
	styleUrls: ['./hero-controls.component.css']
})
export class HeroControls implements OnInit {

	private heroProperty: Hero;

	private lifeDisplay: Number;

	private lifeSubject: Subject<any>;
	private lifeSubscription: Subscription;
	private lifeSubscription2: Subscription;
	private message: string;
	private sentMessage: string;
	private service: HeroLifeService;

	private lifeObserver = {
		next: (messageData) => {

		}
	};

	constructor(websocketService: HeroLifeService) {


		this.service = websocketService;
		this.lifeSubject = websocketService.lifeSubject;
		this.lifeSubscription = websocketService.lifeSubject.subscribe((message) => {
			let messageData = JSON.parse(message.data);
			if (messageData.heroId == this.heroProperty.id) {
				this.heroProperty.life_lost = this.heroProperty.life_lost - messageData.value;
				this.calculateRemainingLife();
			}
		}

		);
	}

	ngOnInit(): void {
		this.calculateRemainingLife()
	}

	@Input()
	get hero() {
		return this.heroProperty;
	}
	set hero(hero) {
		this.heroProperty = hero;
	}

	@Input()
	get life() {
		return this.lifeDisplay;
	}

	updateLife(value: number): void {
		// this.heroProperty.life_lost - value;
		this.service.sendLifeUpate({
			heroId: this.heroProperty.id,
			oldLive: this.lifeDisplay,
			value: value
		});
	}

	calculateRemainingLife(): void {
		this.lifeDisplay = this.heroProperty.life - this.heroProperty.life_lost;
	}

}
