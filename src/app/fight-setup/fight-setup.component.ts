import { Component, OnInit } from '@angular/core';
import { AdventureService } from 'app/domain/adventure.service';
import { Combatant } from 'app/domain/fight';
import { Hero } from 'app/domain/hero';
import { HeroService } from 'app/domain/hero.service';
import { NPC, NPCType } from 'app/domain/npc';
import { OperationFactory, operationTypes } from 'app/domain/remoteControlOperation';
import { RemoteControlService } from 'app/remote-control/remote-control.service';

@Component({
  selector: 'app-fight-setup',
  templateUrl: './fight-setup.component.html',
  styleUrls: ['./fight-setup.component.css']
})
export class FightSetupComponent implements OnInit {

  npcTypes: NPCType[]
  state: string
  heroes: Hero[]
  npcs: NPC[]

  combatants: Combatant[] 

  constructor(private remoteControlService:RemoteControlService, private adventureService:AdventureService, private heroService:HeroService) { }



  ngOnInit() {
    this.state = 'initial'
    this.heroService.getHeroes().then(heroes => {
      for (let index = 0; index < heroes.length; index++) {
        const hero = heroes[index];
        hero.selectedForFight = false
      }
      this.heroes = heroes;
    })
    // this.adventureService.
  }

  async initNPCGeneration() {
    this.npcTypes = await this.adventureService.getNPCTypes()
  }

  startNewFight(){
    this.state = 'setup'
  }

  createNPC(templateId, name) {
    this.remoteControlService.sendRemoteControlInstruction(OperationFactory.createOperation(operationTypes.createNPC, 'self', {name: name, templateId: templateId}))
  }

  addAllHeroes() {
    this.heroes.forEach(hero => {
      hero.selectedForFight = true
    });
  }
  
  removeAllHeroes() {
    this.heroes.forEach(hero => {
      hero.selectedForFight = false
    });
  }

}
