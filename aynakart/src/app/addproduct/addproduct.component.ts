import { Component } from '@angular/core';
import { ProductDetails } from '../product.interface';
import { ProductservService } from '../productserv.service';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  constructor(private productservService: ProductservService) { }
formData:any={};
  /*
  formData: ProductDetails = {
    productId: '',
    sellerName: '',
    productName: '',
    brandName: '',
    categoryId: '',
    stockUnits: 0,
    unitPrice: 0,
    listedDate: '',
    imageUrl: ''
  };
  */
  categoriesList = [
    { id: 1, name: '1- Electronics' },
    { id: 2, name: '2- Toys' },
    { id: 3, name: '3- Utils' },
    // Add more categories as needed
  ];

  // Method to handle form submission
  onSubmit() {
    this.productservService.addProduct(this.formData)
      .subscribe(
        (response: any) => {
          window.alert("Product updated");
        },
        (error: any) => {
          console.error('Error adding product:', error);
          window.alert('Error adding product');
        }
      );
  }
}
