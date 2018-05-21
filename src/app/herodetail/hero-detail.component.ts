
import { Hero } from '../domain/hero';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../domain/hero.service';
import { SkillService } from '../domain/skills.service';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'hero-details',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
  	
})
export class HeroDetailComponent implements OnInit {

	hero: Hero;
	private baseUrl: String;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location
	) {
	this.baseUrl = 'http://' + window.location.hostname + ':8000'; 
}


	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => {
				this.hero = hero;
			});;
	}

}