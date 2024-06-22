import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselTramitesComponent } from './carousel-tramites.component';

describe('CarouselTramitesComponent', () => {
  let component: CarouselTramitesComponent;
  let fixture: ComponentFixture<CarouselTramitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselTramitesComponent]
    });
    fixture = TestBed.createComponent(CarouselTramitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
