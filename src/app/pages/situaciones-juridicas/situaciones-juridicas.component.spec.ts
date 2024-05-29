import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SituacionesJuridicasComponent } from './situaciones-juridicas.component';

describe('SituacionesJuridicasComponent', () => {
  let component: SituacionesJuridicasComponent;
  let fixture: ComponentFixture<SituacionesJuridicasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SituacionesJuridicasComponent]
    });
    fixture = TestBed.createComponent(SituacionesJuridicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
