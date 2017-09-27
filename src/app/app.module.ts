import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule } from 'angularfire2';
//config
import {firebaseConfig } from './config/firebase.config';
//services
//import { CargaImagenesService } from './services/cargar-imagenes.service';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VariablesComponent } from './components/variables/variables.component';
import { AtributosComponent } from './components/atributos/atributos.component';
import { TablaComponent } from './components/tabla/tabla.component';

import { AlarmasComponent } from './components/alarmas/alarmas.component';
//import { AlarmaComponent } from './components/alarmas/alarma.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VariablesComponent,
    AtributosComponent,
    TablaComponent,
    AlarmasComponent,
  //  AlarmaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  //providers: [CargaImagenesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
