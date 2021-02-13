
import { Hero } from '../domain/hero';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../domain/hero.service';
import { SkillService } from '../domain/skills.service';

import { FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

import 'rxjs/add/operator/switchMap';
import { ActualSkill } from '../domain/actualSkill';
import { EditDialogComponent } from 'app/edit-dialog/edit-dialog.component';

@Component({
	selector: 'hero-details',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	talentSearchTerm: String = '';
	talentSearchActive: boolean = false;
	// autoSearchTerm: Observable<String> = '';
	searchCtrl: FormControl;
	hero: Hero;
	@Input()
	_detailArea: String;
	private baseUrl: String;
	public things: Promise<Object[]>;
	// public filteredThings: Observable<Any[]>;
	public filteredSkills: Observable<ActualSkill[]>;
	breakpoint: number;


	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute,
		private location: Location,

	) {
		this.detailArea = 'character';
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
		this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
	}

	filterSkills(name: string) {
		return this.hero.skills.filter(skill =>
			skill.getSkill().name.toLowerCase().indexOf(name.toLowerCase()) !== -1);
	}


	navToAnchor(anchor:string):void {
		
	}

	onSectionChange(event):void {
		console.log('hey');
	}

	showArea(areaTarget):void {
		this.detailArea = areaTarget
	}

	set detailArea(target) {
		this._detailArea = target
	}

	get detailArea() {
		return this._detailArea
	}

	removeWeaponFromInventory(weapon):void {
		debugger;
	}


}