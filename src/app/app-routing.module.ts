import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainLayoutComponent} from './main-layout/main-layout.component';
import {mainRoutes} from './main-layout/main.routes'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


// const routes: Routes = [
//   {path: '', redirectTo: 'login', pathMatch: 'full'},
//   {path: 'login', component: LoginComponent},
//   {path: '', component: MainLayoutComponent, children: mainRoutes},
//   {path: '**', redirectTo: 'login'}
// ];

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', component: MainLayoutComponent, children: mainRoutes},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
