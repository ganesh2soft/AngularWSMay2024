import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OptionchainComponent } from './optionchain/optionchain.component';

import { FuturesComponent } from './futures/futures.component';
import { NiftyhighlowComponent } from './niftyhighlow/niftyhighlow.component';
import { OianalysisComponent } from './oianalysis/oianalysis.component';
import { Topnifty10bank5Component } from './topnifty10bank5/topnifty10bank5.component';
import { PremiumComponent } from './premium/premium.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'futures', component: FuturesComponent },
  { path: 'optionchain', component: OptionchainComponent },
  { path: 'niftyhighlow', component: NiftyhighlowComponent },
  { path: 'oianalysis', component: OianalysisComponent },
  { path : 'topnifty10bank5', component: Topnifty10bank5Component },
  { path:'premium',component:PremiumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
