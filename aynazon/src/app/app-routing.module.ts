import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdditemComponent } from './additem/additem.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'home', component: HomeComponent},
  { path: 'additem', component: AdditemComponent },
  { path: 'item', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
