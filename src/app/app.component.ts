import { Component, OnInit } from '@angular/core';
import { Menu } from './menu/menu.component';
import { Hero } from './domain/hero';
import { HeroService } from './domain/hero.service';
import { HeroLifeService } from './hero-controls/hero-life.service';
import { SkillService } from './domain/skills.service';
import { SpellService } from './domain/spells.service';
import { WeaponService } from './domain/weapons.service'
import { ArmorService } from './domain/armor.service'
import { RemoteControlReceiverService } from './remote-control-receiver/remote-control-receiver.service';
import { RemoteControlService } from './remote-control/remote-control.service';
import { AttributeService } from './domain/attribute.service';
import { from } from 'rxjs';

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [HeroService, AttributeService, HeroLifeService, SkillService, SpellService, WeaponService, ArmorService, RemoteControlReceiverService, RemoteControlService]

})
export class AppComponent {
	title = 'Tour of Heroes';

	constructor(private heroService: HeroService, private attributeService: AttributeService) { }

}
