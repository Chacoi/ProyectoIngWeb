import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioRoutingModule } from './formulario-routing.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormularioRoutingModule
  ],
})
export class FormularioModule { }