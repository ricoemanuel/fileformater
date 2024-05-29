import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OripComponent } from './orip.component';

describe('OripComponent', () => {
  let component: OripComponent;
  let fixture: ComponentFixture<OripComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OripComponent]
    });
    fixture = TestBed.createComponent(OripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
