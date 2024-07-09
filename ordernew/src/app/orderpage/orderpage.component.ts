import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { FilteredItems } from '../FilteredItems';
@Component({
  selector: 'app-orderpage',
  templateUrl: './orderpage.component.html',
  styleUrl: './orderpage.component.css'
})
export class OrderpageComponent implements OnInit {
  constructor(private router: Router, private cartserviceService: CartserviceService) { }
  loadedproduct: any = {}
  quantity: number = 1;
  stockUnits: number = 0;
  totalPrice: number = 0;
 
// Below function triggers as default and corresponding details will be loaded to OrderPage
  ngOnInit(): void {
    if (sessionStorage.getItem('proddetails')) {
      this.loadedproduct = JSON.parse(sessionStorage.getItem('proddetails') || "");
      console.log("From Mydashboard comp", this.loadedproduct);

      this.cartserviceService.getStock(this.loadedproduct.productId).subscribe(
        (data) => {
          this.stockUnits = data; // Assign the fetched stockUnits from the Observable
          console.log('Stock as now ', this.stockUnits);
        },
        (error) => {
          console.error('Error fetching stock:', error);
        }
      );
    }
  }


//After clicking out, order button, filteredItems class has been used to extract the order information from loadedProduct
  checkout() {

    const totalCost = this.quantity * this.loadedproduct.unitPrice;
    // Create a new instance of FilteredItems
    // Please check FilteredItems.ts to understand the data structure required by Order API for addorder
    const filteredItems = new FilteredItems(
      this.loadedproduct.productId,
      this.quantity,
      this.loadedproduct.unitPrice,
      totalCost
    );
    console.log('CHeckout called')
    this.cartserviceService.addOrder(filteredItems)
      .subscribe(
        response => {
          console.log('Stock before tempupdate0',this.stockUnits);
          
          console.log('Successfully added order:', response);
          window.alert('Order status will be updated soon!');
          this.tempUpdateStockFeign();
        },
        error => {
          console.error('Failed to add order:', error);
          window.alert('Failed to add order. Please try again later.');
        }
      );
  }
  tempUpdateStockFeign(){
    this.stockUnits=this.stockUnits-this.quantity;
    this.cartserviceService.updateStockFeign(this.loadedproduct.productId,this.stockUnits).
    subscribe(
      response=> {
        window.alert('Stock updated')
        console.log('Stock updated')
      },
      error=>{
        window.alert('Error in Stock update')
      }
    );
  }
 

  cancelOrder() {
    window.sessionStorage.clear();
    this.router.navigate(['home'])

  }

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}