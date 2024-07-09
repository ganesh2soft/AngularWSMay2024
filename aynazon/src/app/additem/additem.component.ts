import { Component } from '@angular/core';
import { BackendService } from '../backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrl: './additem.component.css'
})
export class AdditemComponent {
  constructor(private _backendService: BackendService,private _router: Router) { }

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
    OnHome(){
      this._router.navigate(['/home']);
    }
    OnReset(){
    this.formData.reset();
    }

    categoriesList = [
      { id: 1, name: '1- Electronics' },
      { id: 2, name: '2- Toys' },
      { id: 3, name: '3- Utils' },
      // Add more categories as needed
    ];
  
    // Method to handle form submission
    onSubmit() {
      this._backendService.addItem(this.formData)
        .subscribe(
          (response: any) => {
            window.alert("Product updated");
            this._router.navigate(['/home']);
          },
          (error: any) => {
            console.error('Error adding product:', error);
            window.alert('Error adding product');
          }
        );
    }
  }
  