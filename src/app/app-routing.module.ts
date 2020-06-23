import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainLayoutComponent} from './main-layout/main-layout.component';
import {mainRoutes} from './main-layout/main.routes'
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '', component: MainLayoutComponent, children: mainRoutes},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
