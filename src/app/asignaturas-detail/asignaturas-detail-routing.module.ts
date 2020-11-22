import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignaturasDetailComponent } from './asignaturas-detail.component';


const routes: Routes = [
  {
    path: '',
    component: AsignaturasDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignaturasDetailRoutingModule { }