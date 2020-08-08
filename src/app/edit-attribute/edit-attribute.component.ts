import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActualAttribute } from 'app/domain/actualAttribute';
import { AscensionPricing } from 'app/domain/ascensionPricing'
import { MAT_DIALOG_DATA } from '@angular/material';
import { EnhancementPricingService } from 'app/domain/enhancement-pricing.service';

@Component({
  selector: 'edit-attribute',
  templateUrl: './edit-attribute.component.html',
  styleUrls: ['./edit-attribute.component.css']
})
export class EditAttributeComponent implements OnInit {

  private costOfRaise:number
  

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    
  }

  ngOnInit() {

  }

}
