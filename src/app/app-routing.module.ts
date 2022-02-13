import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SchnittTableComponent } from './schnitt-table/schnitt-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Schnitt', component: SchnittTableComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
