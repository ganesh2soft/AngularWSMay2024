import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [

  { path: "addproduct", component: AddproductComponent },
  { path: "product", component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
