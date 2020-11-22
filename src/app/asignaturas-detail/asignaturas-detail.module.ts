import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AsignaturasDetailRoutingModule } from './asignaturas-detail-routing.module';
import { AsignaturasDetailComponent } from './asignaturas-detail.component';

@NgModule({
  imports: [
    CommonModule,
    AsignaturasDetailRoutingModule
  ],
})

export class AsignaturasDetailModule { }