import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../domain/hero';
import { HeroService } from '../domain/hero.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
	selector: 'hero-card',
	templateUrl: './hero-card.component.html',
	styleUrls: ['./hero-card.component.css'],

})

export class HeroCard implements OnInit {

	heroProperty: Hero;
	public baseUrl: String;

	constructor(
		private heroService: HeroService,
		private router: Router,
		private route: ActivatedRoute
	) {
		this.baseUrl = 'http://' + window.location.hostname + ':8000';
	}

	ngOnInit(): void {

	}

	@Input()
	get hero() {
		return this.heroProperty;
	}
	set hero(hero) {
		this.heroProperty = hero;
	}

	onSelect(hero: Hero): void {
		this.heroProperty = hero;
		this.gotoDetail();
	}

	gotoDetail(): void {
		this.router.navigate(['../hero', this.heroProperty.id], { relativeTo: this.route });
	}
}