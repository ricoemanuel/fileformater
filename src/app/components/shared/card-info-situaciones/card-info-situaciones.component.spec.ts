import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInfoSituacionesComponent } from './card-info-situaciones.component';

describe('CardInfoSituacionesComponent', () => {
  let component: CardInfoSituacionesComponent;
  let fixture: ComponentFixture<CardInfoSituacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInfoSituacionesComponent]
    });
    fixture = TestBed.createComponent(CardInfoSituacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
