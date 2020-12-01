import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AsignaturasComponent } from './asignaturas/asignaturas.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsignaturasDetailComponent } from './asignaturas-detail/asignaturas-detail.component';
import { FormularioComponent } from './formulario/formulario.component';
import { SendEmailComponent } from './auth/send-email/send-email.component';


const routes: Routes = [
  //{ path: 'asignaturas', component: AsignaturasComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', 
    loadChildren: () => import('./asignaturas-detail/asignaturas-detail.module').then(m => m.AsignaturasDetailModule)
  },
  { path: 'login', 
    loadChildren: () => import('./formulario/formulario.module').then(m => m.FormularioModule)
  },
  { path: 'register', 
    loadChildren: () => import('./formulario2/formulario2.module').then(m => m.Formulario2Module)
  },
  {
    path: 'verification-email',
    component: SendEmailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
