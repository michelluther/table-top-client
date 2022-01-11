import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../domain/hero';
import { HeroService } from '../domain/hero.service';
import { Skill } from '../domain/skill';
import { SkillService } from '../domain/skills.service';




@Component({
	selector: 'heroes-list',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];
	skills: Skill[];
	selectedHero: Hero;
	currentlyLoading: boolean = false;
	successfullyLoaded: boolean = false;

	constructor(
		private heroService: HeroService,
		private skillService: SkillService,
		private router: Router
	) {
		this.loadBasicData();
	}

	loadBasicData(): void {
		this.currentlyLoading = true;
		const heroesPromise = this.heroService.getHeroes()
		const skillsPromise = this.skillService.getSkills()
		Promise.all([heroesPromise, skillsPromise]).then(results => {
			this.heroes = results[0];
			this.skills = results[1];
			this.currentlyLoading = false;
			this.successfullyLoaded = true;
		}).catch(error => {
			this.currentlyLoading = false;
		})
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
