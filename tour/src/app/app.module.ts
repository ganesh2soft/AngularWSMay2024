import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { BookingComponent } from './booking/booking.component';
import { PageheadComponent } from './pagehead/pagehead.component';
import { PagefootComponent } from './pagefoot/pagefoot.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {CustomHttpInterceptor} from './customhttpinterceptor';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MyoffersComponent } from './myoffers/myoffers.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
  
    AdminloginComponent,
    CustomerloginComponent,
    BookingComponent,
    PageheadComponent,
    PagefootComponent,
    MydashboardComponent,
    SpinnerComponent,
    MyoffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:CustomHttpInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
