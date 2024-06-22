import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info-situaciones',
  templateUrl: './card-info-situaciones.component.html',
  styleUrls: ['./card-info-situaciones.component.scss']
})
export class CardInfoSituacionesComponent {
  @Input() config = {
    title:'',
    description:{
      text:''
    },
    implications:{
      text:''
    }
    ,
    img:""

    
  }
}
