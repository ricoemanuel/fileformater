import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel-tramites',
  templateUrl: './carousel-tramites.component.html',
  styleUrls: ['./carousel-tramites.component.scss']
})
export class CarouselTramitesComponent {
  tramites = [
    {
      Title: 'Registros en las escrituras públicas',
      Description: 'Relacionadas con la transferencia de propiedad de bienes inmuebles, como compraventas, donaciones, hipotecas, entre otros.',
      BannerImageUrl: {
        Url: '../../../assets/casa-tramite.jpg'
      }
    },
    {
      Title: 'Inscripción de contratos',
      Description: 'Y otros documentos que afecten los derechos sobre bienes inmuebles, como contratos de arrendamiento, promesas de compraventa, usufructos...',
      BannerImageUrl: {
        Url: '../../../assets/contrato.jpeg'
      }
    },
    {
      Title: 'Cancelación del gravamen',
      Description: 'Si has pagado completamente una hipoteca u otro gravamen sobre un bien inmueble, puedes solicitar la cancelación de dicho gravamen.',
      BannerImageUrl: {
        Url: '../../../assets/gravamen.jpg'
      }
    },
    {
      Title: 'Información registral sobre un inmueble',
      Description: 'Consultar a través del Certificado de Tradición y Libertad la información registral sobre un inmueble específico, incluyendo los documentos asociados y los derechos que lo afectan.',
      BannerImageUrl: {
        Url: '../../../assets/inmuebles.jpg'
      }
    }
  ];
}
