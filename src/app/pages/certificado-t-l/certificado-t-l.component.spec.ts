import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificadoTLComponent } from './certificado-t-l.component';

describe('CertificadoTLComponent', () => {
  let component: CertificadoTLComponent;
  let fixture: ComponentFixture<CertificadoTLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificadoTLComponent]
    });
    fixture = TestBed.createComponent(CertificadoTLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
