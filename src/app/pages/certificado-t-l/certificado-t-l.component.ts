import { Component } from '@angular/core';

@Component({
  selector: 'app-certificado-t-l',
  templateUrl: './certificado-t-l.component.html',
  styleUrls: ['./certificado-t-l.component.scss']
})
export class CertificadoTLComponent {
  activeTab: string = 'Elementos'
  tab(tab: string) {
    this.activeTab = tab
  }
}
