import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TokenInterceptor} from './router-guard/login.interceptor';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; 
import { PaginationModule } from 'ng2-bootstrap/pagination';

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import {HttpModule} from '@angular/http';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import {MatTreeModule} from '@angular/material/tree';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterWithUsComponent } from './register-with-us/register-with-us.component';
import { MyBusinessComponent } from './my-business/my-business.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MytreeComponent } from './mytree/mytree.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { D3treeComponent } from './reusable-components/d3tree/d3tree.component';
import { D3v4treeComponent } from './reusable-components/d3v4tree/d3v4tree.component';
import { GojstreeComponent } from './reusable-components/gojstree/gojstree.component';
import { PlanComponent } from './plan/plan.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { Ng2TableComponent } from './reusable-components/ng2-table/ng2-table.component';
import { ListAllUsersComponent } from './admin/list-all-users/list-all-users.component';
import { DashboardAdminComponent } from './admin/dashboard-admin/dashboard-admin.component';
import { AchivementsComponent } from './achivements/achivements.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    DashboardComponent,
    ContactUsComponent,
    RegisterWithUsComponent,
    MyBusinessComponent,
    MytreeComponent,
    D3treeComponent,
    D3v4treeComponent,
    GojstreeComponent,
    PlanComponent,
    PersonalDetailsComponent,
    OrgChartComponent,
    Ng2TableComponent,
    ListAllUsersComponent,
    DashboardAdminComponent,
    AchivementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    // BrowserAnimationsModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
    Ng2TableModule,
    // NgbModule.forRoot()
    PaginationModule.forRoot(),
    ChartsModule
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
