import { Component, Input, OnInit } from '@angular/core';
import { Combatant } from 'app/domain/fight';

@Component({
  selector: 'combatant',
  templateUrl: './combatant.component.html',
  styleUrls: ['./combatant.component.css']
})
export class CombatantComponent implements OnInit {

  @Input()
  combatant: Combatant

  constructor() { }

  ngOnInit() {
  }

  addToFight(){
    this.combatant.selectedForFight = true
  }
  
  removeFromFight(){
    this.combatant.selectedForFight = false
  }

}
