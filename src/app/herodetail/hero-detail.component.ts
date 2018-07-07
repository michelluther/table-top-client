
import { Hero } from '../domain/hero';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../domain/hero.service';
import { SkillService } from '../domain/skills.service';
import { MatchesSearchTerm } from './skill.pipe';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatInput, MatInputModule, MatOptgroup, MatOption, MatFormFieldControl, MatCard, MatCardSubtitle } from '@angular/material';
import { map, startWith } from 'rxjs/operators';

import 'rxjs/add/operator/switchMap';
import { ActualSkill } from '../domain/actualSkill';

@Component({
	selector: 'hero-details',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	talentSearchTerm: String = '';
	// autoSearchTerm: Observable<String> = '';
	searchCtrl: FormControl;
	hero: Hero;
	private baseUrl: String;
	public things: Promise<Object[]>;
	// public filteredThings: Observable<Any[]>;
	public filteredSkills: Observable<ActualSkill[]>;


	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location,

	) {

		this.searchCtrl = new FormControl();
		this.baseUrl = 'http://' + window.location.hostname + ':8000';
		let that = this;
		new Promise(function (resolve, reject) {
			let heroTimer = setInterval(() => {
				if (that.hero && that.hero.skills) {
					console.log(that.hero.skills);
					resolve(
					that.filteredSkills = that.searchCtrl.valueChanges
						.pipe(
							startWith(''),
							map(searchTerm => {
								return searchTerm ? that.filterSkills(searchTerm) : that.hero.skills.slice()
							})
						));
					clearTimeout(heroTimer);
				}
			}, 100);

		});
	}


	ngOnInit(): void {

		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => {
				this.hero = hero;
			});;
	}

	filterSkills(name: string) {
		return this.hero.skills.filter(skill =>
			skill.getSkill().name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
	}

	//   filterThings(name: string) {
	// 	return this.things.filter(thing =>
	// 	  thing['name'].toLowerCase().indexOf(name.toLowerCase()) === 0);
	//   }

}