import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { HeroLifeService } from './../hero-controls/hero-life.service';
import { MatRipple } from '@angular/material/core'

const rippleColors = {
  good: '#C4F779',
  bad: '#E16772'
}

@Component({
  selector: 'life-display',
  templateUrl: './life-display.component.html',
  styleUrls: ['./life-display.component.css']
})

export class LifeDisplayComponent implements OnInit {

  private _currentLife : Number
  private _maxLife : Number
  private lifeDisplay: Number
  private rippleColors: Object

  @ViewChild(MatRipple) ripple: MatRipple;

  constructor(private websocketService: HeroLifeService) {
  }

  ngOnInit() {
  }

  @Input()
	get currentLife() : Number{
		return this._currentLife;
	}
	set currentLife(currentLife: Number) {
    const rippleColor = this._currentLife > currentLife ? rippleColors.bad : rippleColors.good
    this.ripple.launch({
      color: rippleColor
    })
		this._currentLife = currentLife
  }

  @Input()
  get maxLife():Number {
    return this._maxLife
  }
  set maxLife(maxLife:Number){
    this._maxLife = maxLife
  }

	@Input()
	get life() {
		return this.lifeDisplay;
	}

}
