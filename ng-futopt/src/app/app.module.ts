import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageheaderComponent } from './pageheader/pageheader.component';
import { PagefooterComponent } from './pagefooter/pagefooter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FuturesComponent } from './futures/futures.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { OptionchainComponent } from './optionchain/optionchain.component';

import { FormsModule } from '@angular/forms';
import { NiftyhighlowComponent } from './niftyhighlow/niftyhighlow.component';  // <-- Add this import

import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';
import { OianalysisComponent } from './oianalysis/oianalysis.component';
import { Topnifty10bank5Component } from './topnifty10bank5/topnifty10bank5.component';


import { ReactiveFormsModule } from '@angular/forms';
import { PremiumComponent } from './premium/premium.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FuturesComponent,
    SidebarComponent,
    OptionchainComponent,
    NiftyhighlowComponent,
    PagefooterComponent,
    OianalysisComponent,
    PageheaderComponent,
    Topnifty10bank5Component,
    PremiumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    PaginatorModule,
    RouterModule
      
   
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
