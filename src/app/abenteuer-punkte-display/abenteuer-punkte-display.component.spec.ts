import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenteuerPunkteDisplayComponent } from './abenteuer-punkte-display.component';

describe('AbenteuerPunkteDisplayComponent', () => {
  let component: AbenteuerPunkteDisplayComponent;
  let fixture: ComponentFixture<AbenteuerPunkteDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenteuerPunkteDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenteuerPunkteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
