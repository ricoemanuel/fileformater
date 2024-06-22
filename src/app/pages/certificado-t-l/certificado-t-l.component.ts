import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-certificado-t-l',
  templateUrl: './certificado-t-l.component.html',
  styleUrls: ['./certificado-t-l.component.scss']
})
export class CertificadoTLComponent {
  formulario: FormGroup;
  activeTab: string = 'Elementos';
  tiposDocumento: string[] = ['DNI', 'Pasaporte', 'Licencia de Conducir'];

  constructor() {
    this.formulario = new FormGroup({
      correoElectronico: new FormControl('', [Validators.required, Validators.email]),
      tipoDocumento: new FormControl('', Validators.required),
      numeroDocumento: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
    });
  }

  tab(tab: string) {
    this.activeTab = tab;
  }

  onSubmit() {
    if (this.formulario.valid) {
      const correo = this.formulario.value.correoElectronico;
      const tipoDocumento = this.formulario.value.tipoDocumento;
      const numeroDocumento = this.formulario.value.numeroDocumento;
      const url = `https://certificadostradicionylibertad.co/?correo=${correo}&tipoDocumento=${tipoDocumento}&numeroDocumento=${numeroDocumento}`;
      window.open(url, '_blank');
    } else {
      // Puedes manejar errores aquí si el formulario no es válido
      console.log('Formulario no válido');
    }
  }
}
