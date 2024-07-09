import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { SignupComponent } from './signup/signup.component';
import { BookingComponent } from './booking/booking.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { MyoffersComponent } from './myoffers/myoffers.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'adminlogin', component:AdminloginComponent},
  { path: 'customerlogin', component:CustomerloginComponent},
  { path:'signup', component:SignupComponent},
  { path:'booking', component:BookingComponent},
  {path:'mydashboard',component:MydashboardComponent},
  {path:'myoffers',component:MyoffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

