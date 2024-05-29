import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent {
  @Input() config = {
    texto: '',
    label: '',
    icon: '',
    fontColor: '',
    clase: [''],
    link: ''
  }
}
