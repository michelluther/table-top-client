import { Component, Inject, Input, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ActualAttribute } from 'app/domain/actualAttribute';
import { Hero } from 'app/domain/hero';
import { HeroService } from '../domain/hero.service';
import { EditAttributeComponent } from 'app/edit-attribute/edit-attribute.component';
import { AscensionPricing } from 'app/domain/ascensionPricing';
import { EnhancementPricingService } from 'app/domain/enhancement-pricing.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ActualSkill } from 'app/domain/actualSkill';

@Component({
  selector: 'edit-dialog',
  providers: [
    EditAttributeComponent
    // MatDialogRef
  ],
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  private pricingTable: Array<AscensionPricing>
  private enhancementPricingService: EnhancementPricingService
  private state: String
  private _hero: Hero
  talentSearchTerm: String = '';

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    enhancementPricingService: EnhancementPricingService,
    public dialogRef: MatDialogRef<EditAttributeComponent>
  ){
    this.enhancementPricingService = enhancementPricingService
    this.enhancementPricingService.getAscensionPricing().then(pricing => {
      this.pricingTable = pricing })
    this.state = 'initial'
  }

  ngOnInit(): void {

		this.route.params
			.switchMap((params: Params) => this.heroService.getHero(+params['id']))
			.subscribe(hero => {
				this._hero = hero;
			});
	}

  public setState(state):void {
    this.state = state;
  }

  public getState(): String {
    return 'initial'
  }

  get hero():Hero {
    return this._hero
  }

  @Input()
  set hero(hero){
    this._hero = hero
  }


  public getCostOfAttributeAscension(attribute: ActualAttribute): number {
    const price = this.pricingTable.find(ascensionPricing => {
      return ascensionPricing.levelFrom === attribute.valueNumber
    }).priceH

    return price
  }

  public getCostOfSkillAscension(skill: ActualSkill): number {
    let rowValue = skill.value
    if(rowValue === -7) rowValue = 0
    const price = this.pricingTable.find(ascensionPricing => {
      return ascensionPricing.levelFrom === rowValue
    })[skill.getSkillGroup().getAscensionPricingTableColumn()]

    return price
  }
  

}
