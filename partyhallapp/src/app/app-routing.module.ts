import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { SignupComponent } from './signup/signup.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminmaindashboardComponent } from './adminmaindashboard/adminmaindashboard.component';
import { AuthGuard } from './services/authguard';
import { VisithallsComponent } from './visithalls/visithalls.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'customerlogin', component: CustomerloginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'mydashboard', component: MydashboardComponent },
  { path: 'visithalls', component: VisithallsComponent},
  { path: 'adminmaindashboard',component:AdminmaindashboardComponent, canActivate: [AuthGuard]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


