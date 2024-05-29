import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './components/head/head.component';
//material
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlipCardComponent } from './components/shared/flip-card/flip-card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { TramitesComponent } from './components/tramites/tramites.component';
import { CardTramiteComponent } from './components/shared/card-tramite/card-tramite.component';
import { CertificadoTLComponent } from './pages/certificado-t-l/certificado-t-l.component';
import { OripComponent } from './pages/orip/orip.component';
import { SituacionesJuridicasComponent } from './pages/situaciones-juridicas/situaciones-juridicas.component';
import { CardInfoSituacionesComponent } from './components/shared/card-info-situaciones/card-info-situaciones.component';
import { GridInfoSituacionesComponent } from './components/grid-info-situaciones/grid-info-situaciones.component';
import { BlogComponent } from './pages/blog/blog.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FlipCardComponent,
    TramitesComponent,
    CardTramiteComponent,
    CertificadoTLComponent,
    OripComponent,
    SituacionesJuridicasComponent,
    CardInfoSituacionesComponent,
    GridInfoSituacionesComponent,
    BlogComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
