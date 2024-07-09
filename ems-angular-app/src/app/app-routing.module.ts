import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadcompComponent } from './components/headcomp/headcomp.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { AdminshowComponent } from './components/adminshow/adminshow.component';
import { NoticesComponent } from './components/notices/notices.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'headcomp',component:HeadcompComponent},
  {path: 'menu', component: MenuComponent},
  {path:'dashboard', component:AdminshowComponent},
  {path:'signup',component:SignupComponent},
  {path:'notices',component:NoticesComponent},
  {path:'login',component:LoginComponent},
  {path:'profile',component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
