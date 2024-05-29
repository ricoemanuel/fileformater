import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadoTLComponent } from './pages/certificado-t-l/certificado-t-l.component';
import { OripComponent } from './pages/orip/orip.component';
import { SituacionesJuridicasComponent } from './pages/situaciones-juridicas/situaciones-juridicas.component';

const routes: Routes = [

  {
    path: 'orip',
    component: OripComponent
  },
  {
    path:'certificado-tradicion-libertad',
    component:CertificadoTLComponent
  },
  {
    path:'situaciones-juridicas',
    component:SituacionesJuridicasComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'orip',
  },
  {
    path: '**',
    redirectTo: 'orip',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
