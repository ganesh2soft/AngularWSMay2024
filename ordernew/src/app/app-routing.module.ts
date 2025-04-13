import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderpageComponent } from './orderpage/orderpage.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'home', component: HomeComponent},
  { path:'orderpage', component: OrderpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
