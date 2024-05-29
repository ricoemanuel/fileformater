import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridInfoSituacionesComponent } from './grid-info-situaciones.component';

describe('GridInfoSituacionesComponent', () => {
  let component: GridInfoSituacionesComponent;
  let fixture: ComponentFixture<GridInfoSituacionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridInfoSituacionesComponent]
    });
    fixture = TestBed.createComponent(GridInfoSituacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
