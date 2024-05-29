import { Component } from '@angular/core';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.scss']
})
export class TramitesComponent {
configs:any[]=[
  {
    Title:'Registros en las escrituras públicas',
    Text:'Relacionadas con la transferencia de propiedad de bienes inmuebles, como compraventas, donaciones, hipotecas, entre otros.'
  },
  {
    Title:'Inscripción de contratos',
    Text:'Y otros documentos que afecten los derechos sobre bienes inmuebles, como contratos de arrendamiento promesas de compraventa, usufructos…'
  },
  {
    Title:'Cancelación del gravamen',
    Text:'Si has pagado completamente una hipoteca u otro gravamen sobre un bien inmueble, puedes solicitar la cancelación de dicho gravamen '
  },
  {
    Title:'información registral sobre un inmueble',
    Text:'Consultar a través del Certificado de Tradición y Libertad la información registral sobre un inmueble específico, incluyendo los documentos asociados y los derechos que lo afectan.'
  }
]
}
