import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth.guard";
import { SchnittTableComponent } from './schnitt-table/schnitt-table.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SpieltagsplanungComponent } from './spieltagsplanung/spieltagsplanung.component';

const routes: Routes = [
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Schnitt', component: SchnittTableComponent },
  { path: 'Spieltagsplanung', component: SpieltagsplanungComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
