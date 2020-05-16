import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { Hero } from 'app/domain/hero';
import { SkillGroup } from 'app/domain/skillgroup';
import { SpellGroup } from 'app/domain/spellGroup';


class MenuItem {

  title: String
  target: String


  constructor(config){
    this.title = config.title
    this.target = config.target
  }
}

@Component({
  selector: 'detail-navigation',
  templateUrl: './detail-navigation.component.html',
  styleUrls: ['./detail-navigation.component.css']
})
export class DetailNavigationComponent implements OnInit {

  @Input() hero: Hero
  isMagic: boolean
  skillGroups: Array<SkillGroup>
  spellGroups: Array<SpellGroup>
  menuVisible: boolean

  menu: Array<Object>

  constructor(private elRef: ElementRef) { 
    this.elRef = elRef
  }

  ngOnInit() {
    this.updateNavigation()
  }

  updateNavigation() {
    let menu = [
      new MenuItem({title: 'Allgemein', target: 'Allgemein'}), 
    ]
    if(this.hero)
      this.hero.skillGroups.forEach(skillGroup => {
        menu.push(new MenuItem({title: skillGroup.getSkillGroup().name}))
      })
    this.menu = menu
  }

  toggleVisible() {
    this.menuVisible = !this.menuVisible
  }

  navTo(target) {
    let menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target]
    menuTarget.scrollIntoView()
  }

  navToSkillGroup(target) {
    let menuTarget = this.elRef.nativeElement.parentElement.getElementsByClassName('menuItem')[target.skillGroup.name]
    menuTarget.scrollIntoView()
  }

  
}
