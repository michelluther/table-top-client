
import { Hero } from '../domain/hero';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../domain/hero.service';
// import { Hero } from './hero'

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'hero-details',
	template: `
  	<div *ngIf="hero">
  		<h1>{{hero.name}}</h1>
  		<div><label>id: </label>{{hero.id}}</div>
  	</div>
  `,
})
export class HeroDetailComponent implements OnInit {

	hero: Hero;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) { }

	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => {
				this.hero = hero;
			});;
	}

}