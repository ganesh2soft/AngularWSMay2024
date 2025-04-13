import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { PagefootComponent } from './pagefoot/pagefoot.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { MydashboardComponent } from './mydashboard/mydashboard.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsermgmtComponent } from './usermgmt/usermgmt.component';
import { BookmgmtComponent } from './bookmgmt/bookmgmt.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AdminmaindashboardComponent } from './adminmaindashboard/adminmaindashboard.component';
import { AdminwithhallComponent } from './adminwithhall/adminwithhall.component';
import { AdminwithcustomerComponent } from './adminwithcustomer/adminwithcustomer.component';
import { AdminwithbookingComponent } from './adminwithbooking/adminwithbooking.component';
import { AdminhalladdeditcmpComponent } from './adminhalladdeditcmp/adminhalladdeditcmp.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { VisithallsComponent } from './visithalls/visithalls.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { AdminwithavailabilityComponent } from './adminwithavailability/adminwithavailability.component';
import { AdminavailabilityaddeditComponent } from './adminavailabilityaddedit/adminavailabilityaddedit.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageheaderComponent,
    PagefootComponent,
    SignupComponent,
    CustomerloginComponent,
    AdminloginComponent,
    MydashboardComponent,
    SpinnerComponent,
    UsermgmtComponent,
    BookmgmtComponent,
    AdminmaindashboardComponent,
    AdminwithhallComponent,
    AdminhalladdeditcmpComponent,
    AdminwithcustomerComponent,
    AdminwithbookingComponent,
    VisithallsComponent,
    AdminwithavailabilityComponent,
    AdminavailabilityaddeditComponent
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatButtonModule,
    BrowserAnimationsModule,
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
