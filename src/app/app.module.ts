import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { AsignaturasDetailComponent } from './asignaturas-detail/asignaturas-detail.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormularioComponent } from './formulario/formulario.component';
import { Formulario2Component } from './formulario2/formulario2.component'; // <-- NgModel lives here


@NgModule({
  declarations: [
    AppComponent,
    AsignaturasDetailComponent,
    MensajesComponent,
    DashboardComponent,
    FormularioComponent,
    Formulario2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
