import { Component, Input, OnInit } from '@angular/core';
import { HeroService } from '../domain/hero.service';
import { Hero } from '../domain/hero';
import { HeroLifeService } from './hero-life.service';
import { Subject, Observable, Subscription } from 'rxjs/Rx';


@Component({
	selector: 'hero-controls',
	templateUrl: './hero-controls.component.html',
	styleUrls: ['./hero-controls.component.css']
})
export class HeroControls implements OnInit {

	private heroProperty: Hero;

	private lifeDisplay: Number;

	private socket: Subject<any>;
	private lifeSubscription: Subscription;
	private lifeSubscription2: Subscription;
	private message: string;
	private sentMessage: string;
	constructor(websocketService: HeroLifeService) {
		this.socket = websocketService.createWebsocket();
	}
	ngOnInit() {
		let socket = this.socket;
		this.lifeSubscription = this.socket.subscribe((message) => {
			console.log('i got called, first');
			let messageData = JSON.parse(message.data);
			if (messageData.heroId == this.heroProperty.id) {
				this.heroProperty.lifeLeft = this.heroProperty.lifeLeft + messageData.value;
			}
		}
		);
		// this.lifeSubscription2 = this.socket.subscribe((message) => {
		// 	console.log('i got called, too');
		// })
		// debugger;
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
		this.heroProperty.lifeLeft = this.heroProperty.lifeLeft + value;
		this.socket.next({
			heroId: this.heroProperty.id,
			oldLive: this.lifeDisplay,
			value: value
		});
	}

}
