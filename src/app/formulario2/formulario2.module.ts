import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Formulario2RoutingModule } from './formulario2-routing.module';
import { Formulario2Component } from './formulario2.component';
//import { UserService } from '../user.service';

@NgModule({
  imports: [
    CommonModule,
    Formulario2RoutingModule,
    //UserService
  ],
})
export class Formulario2Module { }