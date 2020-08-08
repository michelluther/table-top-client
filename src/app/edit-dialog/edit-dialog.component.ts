import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';
import { ActualAttribute } from 'app/domain/actualAttribute';
import { Hero } from 'app/domain/hero';
import { EditAttributeComponent } from 'app/edit-attribute/edit-attribute.component';
import { AscensionPricing } from 'app/domain/ascensionPricing';
import { EnhancementPricingService } from 'app/domain/enhancement-pricing.service';

@Component({
  selector: 'edit-dialog',
  providers: [EditAttributeComponent],
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.css']
})
export class EditDialogComponent implements OnInit {

  private pricingTable: Array<AscensionPricing>

  constructor(public dialog: MatDialog, private enhancementPricingService:EnhancementPricingService) { 
    enhancementPricingService.getAscensionPricing().then(pricing => {
      this.pricingTable = pricing
    })
  }


  ngOnInit() {
  }
  
  public editAttribute(attribute: ActualAttribute, hero:Hero) {
    
    const price = this.pricingTable.find(ascensionPricing => {
      return ascensionPricing.levelFrom === attribute.valueNumber
    }).priceH
    
    this.dialog.open(EditAttributeComponent, {
      data: {
        attribute: attribute,
        costOfAscension: price,
        hero: hero
      },
      panelClass: 'myapp-edit-dialog'
    })
  }

}
