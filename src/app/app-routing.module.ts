import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificadoTLComponent } from './pages/certificado-t-l/certificado-t-l.component';
import { OripComponent } from './pages/orip/orip.component';
import { SituacionesJuridicasComponent } from './pages/situaciones-juridicas/situaciones-juridicas.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { LoginComponent } from './pages/login/login.component';

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
    path:'blog',
    component:BlogComponent
  },
  {
    path:'publicacion/:id',
    component:PostComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'certificado-tradicion-libertad',
  },
  {
    path: '**',
    redirectTo: 'certificado-tradicion-libertad',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
