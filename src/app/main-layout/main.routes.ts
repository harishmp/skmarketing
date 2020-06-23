import {Routes} from "@angular/router";

import {DashboardComponent} from '../dashboard/dashboard.component';
import {ContactUsComponent} from '../contact-us/contact-us.component';
import {RegisterWithUsComponent} from '../register-with-us/register-with-us.component';
import {MyBusinessComponent} from '../my-business/my-business.component';
import {PlanComponent} from '../plan/plan.component';
import {PersonalDetailsComponent} from '../personal-details/personal-details.component';

export const mainRoutes: Routes = [
  
    {path: 'dashboard', component: DashboardComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'register-with-us', component: RegisterWithUsComponent},
    {path: 'my-business', component: MyBusinessComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'personal-details', component: PersonalDetailsComponent},
];
