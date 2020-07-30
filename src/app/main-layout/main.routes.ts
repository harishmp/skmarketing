import {Routes} from "@angular/router";

import {DashboardComponent} from '../dashboard/dashboard.component';
import {ContactUsComponent} from '../contact-us/contact-us.component';
import {RegisterWithUsComponent} from '../register-with-us/register-with-us.component';
import {MyBusinessComponent} from '../my-business/my-business.component';
import {PlanComponent} from '../plan/plan.component';
import {PersonalDetailsComponent} from '../personal-details/personal-details.component';
import {ListAllUsersComponent} from '../admin/list-all-users/list-all-users.component';
import {AchivementsComponent} from '../achivements/achivements.component';
import {DashboardAdminComponent} from '../admin/dashboard-admin/dashboard-admin.component';
import {OurProductsComponent} from '../our-products/our-products.component';
import {InboxComponent} from '../admin/inbox/inbox.component';
import {MemberDashboardComponent} from '../member-dashboard/member-dashboard.component';
import {AddEditUserComponent} from '../admin/add-edit-user/add-edit-user.component';

export const mainRoutes: Routes = [
  
    {path: 'dashboard', component: DashboardComponent},
    {path: 'contact-us', component: ContactUsComponent},
    {path: 'register-with-us', component: RegisterWithUsComponent},
    {path: 'my-business', component: MyBusinessComponent},
    {path: 'plan', component: PlanComponent},
    {path: 'personal-details', component: PersonalDetailsComponent},
    {path: 'list-all-users', component: ListAllUsersComponent},
    {path: 'achivements', component: AchivementsComponent},
    {path: 'dashboard-admin', component: DashboardAdminComponent},
    {path: 'our-products', component: OurProductsComponent},
    {path: 'inbox', component: InboxComponent},
    {path: 'dashboard-member', component: MemberDashboardComponent},
    {path: 'add-edit-details', component: AddEditUserComponent},
];
