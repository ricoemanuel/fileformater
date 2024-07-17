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
import { CertificadoTLComponent } from './pages/certificado-t-l/certificado-t-l.component';
import { OripComponent } from './pages/orip/orip.component';
import { SituacionesJuridicasComponent } from './pages/situaciones-juridicas/situaciones-juridicas.component';
import { CardInfoSituacionesComponent } from './components/shared/card-info-situaciones/card-info-situaciones.component';
import { GridInfoSituacionesComponent } from './components/grid-info-situaciones/grid-info-situaciones.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CarouselTramitesComponent } from './components/carousel-tramites/carousel-tramites.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditorModule } from 'primeng/editor';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostComponent } from './pages/post/post.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FlipCardComponent,
    CertificadoTLComponent,
    OripComponent,
    SituacionesJuridicasComponent,
    CardInfoSituacionesComponent,
    GridInfoSituacionesComponent,
    BlogComponent,
    CarouselTramitesComponent,
    PostFormComponent,
    PostComponent,
    LoginComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    AngularEditorModule,
    MatIconModule,
    ButtonModule,
    MatSelectModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    provideFirebaseApp(() => initializeApp({"projectId":"mega-informativo","appId":"1:334311439484:web:88a5a48afbd3d0ff8d1df9","storageBucket":"mega-informativo.appspot.com","apiKey":"AIzaSyA9wCdeKTFZzDz1YdEWPbPF1gHIrsj1XiU","authDomain":"mega-informativo.firebaseapp.com","messagingSenderId":"334311439484","measurementId":"G-9G67KFWTLD"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
