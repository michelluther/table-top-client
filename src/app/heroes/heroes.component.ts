import { Component, OnInit } from '@angular/core';
import { Hero } from '../domain/hero';

import { HeroService } from '../domain/hero.service';

import { Router } from '@angular/router';


@Component({
	selector: 'heroes-list',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private heroService: HeroService,
		private router: Router
	) {
		this.getHeroes();

	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	ngOnInit(): void {

	}
	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.gotoDetail();
	}

	gotoDetail(): void {
		this.router.navigate(['/hero', this.selectedHero.id]);
	}
}
