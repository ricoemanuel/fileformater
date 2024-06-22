import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-info-situaciones',
  templateUrl: './grid-info-situaciones.component.html',
  styleUrls: ['./grid-info-situaciones.component.scss']
})
export class GridInfoSituacionesComponent {
configs:any[]=[
  {
    title:'Hipoteca',
    description:{
      text:'El inmueble se convierte en garantía para el pago de una deuda. La hipoteca se registra en la Oficina de Registro de Instrumentos Públicos'
    },
    implications:{
      text:'El propietario conserva la titularidad del inmueble, pero el prestamista tiene un derecho prioritario sobre el mismo en caso de incumplimiento en el pago del préstamo. Esto afecta la venta o transferencia del inmueble sin cancelar la hipoteca. '
    },
    img:"../../../assets/banking.png"
  },
  {
    title:'Embargo',
    description:{
      text:'Es una medida legal que restringe la capacidad del propietario para disponer de su propiedad como resultado de una deuda impaga.'
    },
    implications:{
      text:'El inmueble queda sujeto a las medidas judiciales y puede ser vendido en una subasta pública para satisfacer la deuda. El propietario conserva la titularidad hasta que se complete el proceso de embargo.'
    }
    ,
    img:"../../../assets/document.png"
  },
  {
    title:'Limitaciones urbanísticas',
    description:{
      text:'Las limitaciones urbanísticas son regulaciones impuestas por las autoridades locales que afectan el uso y desarrollo de un inmueble, como restricciones de altura, densidad, zonificación, entre otras.'
    },
    implications:{
      text:'El propietario del inmueble está sujeto a cumplir con las regulaciones urbanísticas al realizar cualquier tipo de construcción o modificación en el mismo. El incumplimiento puede resultar en multas u otras sanciones'
    },
    img:"../../../assets/construction.png"
  },
  {
    title:'Prenda',
    description:{
      text:'La prenda es un derecho real de garantía que se establece sobre un bien mueble o inmueble para asegurar el cumplimiento de una obligación, como un préstamo.'
    },
    implications:{
      text:'Al igual que con la hipoteca, la prenda otorga al acreedor un derecho prioritario sobre el bien prendado en caso de incumplimiento en el pago de la deuda.'
    },
    img:"../../../assets/protection.png"
  },
  {
    title:'Impuestos y gravámenes fiscales',
    description:{
      text:'Los impuestos y gravámenes fiscales pueden afectar una propiedad si el propietario no cumple con sus obligaciones tributarias, como el impuesto predial u otros impuestos asociados a la propiedad.'
    },
    implications:{
      text:'El incumplimiento en el pago de impuestos puede resultar en la imposición de embargos fiscales sobre la propiedad.'
    }
    ,
    img:"../../../assets/tax.png"
  },
  {
    title:'Litigios pendientes',
    description:{
      text:'Los litigios pendientes pueden surgir como resultado de disputas legales relacionadas con la propiedad, como demandas por incumplimiento de contrato, disputas de límites de propiedad, o reclamaciones de terceros sobre la propiedad.'
    },
    implications:{
      text:'Los litigios pendientes pueden afectar la transferencia de propiedad.'
    }
    ,
    img:"../../../assets/legal-hammer.png"
  },
  
]
}
