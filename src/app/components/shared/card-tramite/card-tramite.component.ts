import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-tramite',
  templateUrl: './card-tramite.component.html',
  styleUrls: ['./card-tramite.component.scss']
})
export class CardTramiteComponent {
  @Input() config = {
    Title:'',
    Text:''
  }
}
