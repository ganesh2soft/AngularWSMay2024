import { Component, OnInit } from '@angular/core';
import { ProductservService } from '../productserv.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  productDetails: any[] = [];

  constructor(private productservService: ProductservService, private router: Router) { }

  ngOnInit(): void {
    this.listProducts();
  }
  addProd() {
    this.router.navigate(['/addproduct']);
  }

  listProducts() {
    this.productservService.getProductList().subscribe(
      (data: any) => {
        this.productDetails = data._embedded.product;
        console.log(data);
        console.log('Array',this.productDetails);
      },
      error => {
        console.error('Error fetching product details:', error);
      }
    );
  }
}

