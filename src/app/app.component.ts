import { Component, OnInit } from '@angular/core';
import { Menu } from './menu/menu.component';
import { Hero } from './domain/hero';
import { HeroService } from './domain/hero.service';
import { HeroLifeService } from './hero-controls/hero-life.service';
import { SkillService } from './domain/skills.service';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HeroService, HeroLifeService, SkillService]

})
export class AppComponent {
	title = 'Tour of Heroes';

	constructor(private heroService: HeroService) { }

}
