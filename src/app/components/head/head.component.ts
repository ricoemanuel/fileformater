import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent {
  configs:any[]=[{
    texto: 'Y sus funciones',
    label: 'Oficinas de Registro de Instrumentos Públicos en Colombia',
    icon: '',
    fontColor: '',
    clase: ['orange-blue','proyectos-bg', 'orange-color'],
    link: '/idea'
  },
  {
    texto: 'Información que contiene y su utilidad',
    label: 'Certificado de Tradición y Libertad',
    icon: '',
    fontColor: '',
    clase: ['orange-blue','retos-bg', 'blue-color'],
    link: '/main-retos'
  },
  {
    texto: 'Descripción e implicaciones.',
    label: 'Situaciones jurídicas de un predio',
    icon: '',
    fontColor: '',
    clase: ['orange-blue','explora-bg', 'violet-color'],
    link: '/noticias/ultimas'
  }
]
}
