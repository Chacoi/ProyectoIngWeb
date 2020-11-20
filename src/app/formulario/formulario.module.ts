import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRoutingModule } from './formulario-routing.module';
import { FormularioComponent } from './formulario.component';

@NgModule({
  imports: [
    CommonModule,
    FormularioRoutingModule
  ],
})
export class FormularioModule { }