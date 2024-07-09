import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeadcompComponent } from './components/headcomp/headcomp.component';
import { MydashboardComponent } from './components/mydashboard/mydashboard.component';
import { AdminshowComponent } from './components/adminshow/adminshow.component';
import { AdmindelComponent } from './components/admindel/admindel.component';
import { AdmineditComponent } from './components/adminedit/adminedit.component';
import { NoticesComponent } from './components/notices/notices.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { SignupComponent } from './components/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { SidenavbarrComponent } from './components/sidenavbarr/sidenavbarr.component';
import { MatIconModule } from '@angular/material/icon';
import { StaffService } from './staff.service';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

   

@NgModule({
  declarations: [
    AppComponent,
    HeadcompComponent,
    MydashboardComponent,
    AdminshowComponent,
    AdmindelComponent,
    AdmineditComponent,
    NoticesComponent,
    HomeComponent,
    MenuComponent,
    SignupComponent,
    SidenavbarrComponent,
    LoginComponent,
    ProfileComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
   
  ],
  providers: [
    StaffService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
