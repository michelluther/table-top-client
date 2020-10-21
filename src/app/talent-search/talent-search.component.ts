import { Component, Input, OnInit } from '@angular/core';
import { MatchesSearchTerm } from './skill.pipe';
import { Hero } from '../domain/hero';

@Component({
  selector: 'talent-search',
  templateUrl: './talent-search.component.html',
  styleUrls: ['./talent-search.component.css']
})
export class TalentSearchComponent implements OnInit {

  @Input()
  hero: Hero;
  @Input()
  searchActive: Boolean;
  talentSearchTerm: String = '';

  constructor() { }

  ngOnInit() {
  }

  // @Input()
  // set talentSearchTerm (searchTerm){
  //   this.talentSearchTerm = searchTerm
  //   if(this.talentSearchTerm !== undefined && this.talentSearchTerm !== '') this.searchActive = true
  // }

}
