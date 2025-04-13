import { Component, OnInit } from '@angular/core';
import { TradeguidesrvService } from '../tradeguidesrv.service';  // Import the updated service
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms'; 
@Component({
  selector: 'app-topnifty10bank5',
  templateUrl: './topnifty10bank5.component.html',
  styleUrls: ['./topnifty10bank5.component.css'],
  standalone: false
})
export class Topnifty10bank5Component implements OnInit {
  orderForm!:FormGroup;
  niftytoprows: any[] = [];
  banktoprows: any[] = [];
  midcap5rows: any[] = [];  // Add property for midcap rows

  constructor(private tradeguidesrv: TradeguidesrvService,private fb: FormBuilder) { }

  ngOnInit(): void {
    this.fetchniftytop();
    this.fetchbanktop();
    this.fetchmidcap5();  // Fetch midcap data on initialization
    
  }
  selectedOptionType: string = '';
  orderData = {
    quantity: 1,
    product: 'D', // Default value for product
    validity: 'DAY', // Default validity
    price: 0,
    tag: '',
    instrument_token: '',
    order_type: 'LIMIT',
    transaction_type: 'BUY',
    disclosed_quantity: 0,
    trigger_price: 0,
    is_amo: false
  };

  onSubmit(form: NgForm) {
    if (form.invalid) {
      console.log('Form is invalid');
      return;
    }

    // Call the service to place the order
    this.tradeguidesrv.placeOrder(this.orderData).subscribe(
      response => {
        console.log('Order placed successfully:', response);
        alert('Order placed successfully');
      },
      error => {
        console.error('Error placing order:', error);
        alert('Error placing order');
      }
    );
  }
  
  
  fetchbanktop(): void {
    this.tradeguidesrv.gettopbank5().subscribe(
      (data: any[]) => {  // Assuming the data is an array of bank objects
        console.log('Bank Data:', data);  // Check the data
        this.banktoprows = data;
      },
      (error) => {
        console.error('Error fetching Bank data:', error);
      }
    );
  }
  fetchmidcap5(): void {
    this.tradeguidesrv.gettopmidcap5().subscribe(
      (data: any[]) => {  // Assuming the data is an array of midcap5 objects
        console.log('Midcap 5 Data:', data);  // Check the data
        this.midcap5rows = data;  // Store the Midcap 5 data in the midcap5rows array
      },
      (error) => {
        console.error('Error fetching Midcap 5 data:', error);  // Handle error
      }
    );
  }
  
  fetchniftytop(): void {
    this.tradeguidesrv.gettopnifty10().subscribe(
      (data: any[]) => {  // Assuming the data is an array of nifty objects
        console.log('Nifty Data:', data);  // Check the data
        this.niftytoprows = data;
      },
      (error) => {
        console.error('Error fetching Nifty data:', error);
      }
    );
  }

  getLtpForSymbol(topNifty: any[], symbol: string): number {
    const item = topNifty.find(i => i.symbol === symbol);
    return item ? item.ltp : 0;  // Return 0 if the symbol isn't found
  }
  
  
  // Helper to get unique timestamps from data
  
  getLTP(symbol: string, timestamp: string, data: any[]): number | string {
    const item = data.find(item => item.symbol === symbol && item.timestamp === timestamp);
    return item ? item.ltp : '-';  // If data not found, return '-'
  }

  getArrow(prevLtp: number, currentLtp: number): string {
    if (currentLtp > prevLtp) {
      return '↑';  // Blue for UP
    } else if (currentLtp < prevLtp) {
      return '↓';  // Brownish for DOWN
    } else {
      return '-';  // Gray for no change
    }
  }
 
  onQuantityChange(event: any) {
    const value = event.target.value;
    if (value < 1) {
      event.target.value = 1;  // Reset to 1 if the user tries to enter a value less than 1
    }
  }
}
