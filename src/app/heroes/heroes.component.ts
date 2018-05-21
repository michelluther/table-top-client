import { Component, OnInit } from '@angular/core';
import { Hero } from '../domain/hero';
import { Skill } from '../domain/skill';

import { HeroService } from '../domain/hero.service';
import { SkillService } from '../domain/skills.service';

import { Router } from '@angular/router';


@Component({
	selector: 'heroes-list',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];
	skills: Skill[];
	selectedHero: Hero;

	constructor(
		private heroService: HeroService,
		private skillService: SkillService,
		private router: Router
	) {
		this.getHeroes();
		this.getSkills();
	}

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	getSkills(): void {
		this.skillService.getSkills().then(skills => this.skills = skills);
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
