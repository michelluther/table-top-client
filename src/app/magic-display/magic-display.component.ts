import {
  Component,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  HeroLifeService
} from './../hero-controls/hero-life.service';
import {
  MatRipple
} from '@angular/material/core'

const rippleColors = {
  good: '#C4F779',
  bad: '#E16772'
}

@Component({
  selector: 'magic-display',
  templateUrl: './magic-display.component.html',
  styleUrls: ['./magic-display.component.css']
})
export class MagicDisplayComponent implements OnInit {

  private _currentMagicEnergy: Number
  private _maxMagicEnergy: Number
  private magicDisplay: Number

  @ViewChild(MatRipple) ripple: MatRipple;

  constructor(private websocketService: HeroLifeService) {}

  ngOnInit() {}

  @Input()
  get currentMagicEnergy(): Number {
    return this._currentMagicEnergy;
  }
  set currentMagicEnergy(currentMagicEnergy: Number) {

    this._currentMagicEnergy = currentMagicEnergy
  }


  @Input()
  get maxMagicEnergy(): Number {
    return this._maxMagicEnergy
  }
  set maxMagicEnergy(maxMagicEnergy: Number) {
    this._maxMagicEnergy = maxMagicEnergy
  }

  @Input()
  get life() {
    return this.magicDisplay;
  }

  public rippleDisplay(valueUpdate: Number): void {
    const rippleColor = valueUpdate < 0 ? rippleColors.bad : rippleColors.good
    this.ripple.launch({
      color: rippleColor
    })
  }

  // Test stuff
  public rippleText(text: String): void {
    console.log(text)
  };

}
