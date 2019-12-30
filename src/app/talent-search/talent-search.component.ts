import { Component, OnInit } from '@angular/core';
import { MatchesSearchTerm } from './skill.pipe';
import { Hero } from '../domain/hero';

@Component({
  selector: 'talent-search',
  templateUrl: './talent-search.component.html',
  styleUrls: ['./talent-search.component.css']
})
export class TalentSearchComponent implements OnInit {

  hero: Hero;

  constructor() { }

  ngOnInit() {
  }

}
