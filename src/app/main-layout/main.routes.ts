import {Routes} from "@angular/router";

import {DashboardComponent} from '../dashboard/dashboard.component';
import {ContactUsComponent} from '../contact-us/contact-us.component';
import {RegisterWithUsComponent} from '../register-with-us/register-with-us.component';

export const mainRoutes: Routes = [
  
    {path: 'dashboard', component: DashboardComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'register-with-us', component: RegisterWithUsComponent}
];
