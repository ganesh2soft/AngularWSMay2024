import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { TradeguidesrvService } from '../tradeguidesrv.service';  // Import the updated service
import { NiftyOHLCData } from '../model/NiftyOHLCData';

@Component({
  selector: 'app-niftyhighlow',
  templateUrl: './niftyhighlow.component.html',
  styleUrl: './niftyhighlow.component.css',
  standalone: false
})
export class NiftyhighlowComponent implements OnInit {

  nifty50hlrows: NiftyOHLCData[] = [];
  paginatedNifty50hlrows: NiftyOHLCData[] = []; // Array to hold the currently visible page data
  totalRecords: number = 0;
  rows: number = 20;  // Number of items per page
  maxHigh: number = 0; // Variable to store the highest "high" value
  minLow: number = Infinity; 
  secondMaxHigh = 0;  // Variable to store the second-highest "high" value
  secondMinLow = Infinity;  // Variable to store the second-lowest "low" value
  constructor(private tradeguidesrv: TradeguidesrvService) { }  // Inject the updated service

  ngOnInit(): void {
    // Fetch the futures data when the component initializes
    this.tradeguidesrv.getNifty50HL().subscribe(
      (data) => {
        this.nifty50hlrows = data.map(item => new NiftyOHLCData(

          item.timestamp,
          item.last_price,
          item.ohlc.open,
          item.ohlc.high,
          item.ohlc.low,
          item.ohlc.close

        ));
        this.totalRecords = this.nifty50hlrows.length;
        this.updateMaxHigh();
        this.updateMinLow();

        this.updateSecondMaxHigh();  // Call the function to update second max high
        this.updateSecondMinLow();  
        const lastPageIndex = Math.floor(this.totalRecords / this.rows) * this.rows;
        this.paginateData(lastPageIndex); // Load the latest page
      },
      (error) => {
        console.error('Error fetching data from Flask API', error);
      }
    );

  }
  // Pagination handler
  onPageChange(event: any) {
    this.paginateData(event.first);
  }
  // Update maxHigh by finding the highest "high" value in the data
  updateMaxHigh(): void {
    if (this.nifty50hlrows.length > 0) {
      this.maxHigh = Math.max(...this.nifty50hlrows.map(row => row.ohlc.high));
    }
  }

  // Update minLow by finding the lowest "low" value in the data
  updateMinLow(): void {
    if (this.nifty50hlrows.length > 0) {
      this.minLow = Math.min(...this.nifty50hlrows.map(row => row.ohlc.low));
    }
  }
  updateSecondMaxHigh(): void {
    if (this.nifty50hlrows.length > 0) {
      // Filter out invalid high values (e.g., NaN or null)
      const validHighs = this.nifty50hlrows
        .map(row => row.ohlc.high)
        .filter(high => !isNaN(high));
  
      if (validHighs.length > 1) {
        // Sort in descending order and get the second-highest value
        const sortedHighs = validHighs.sort((a, b) => b - a);
        this.secondMaxHigh = sortedHighs[1];  // Second-highest value
      }
    }
  }
  
  // Update second minLow by finding the second-lowest "low" value in the data
  updateSecondMinLow(): void {
    if (this.nifty50hlrows.length > 0) {
      // Filter out invalid low values (e.g., NaN or null)
      const validLows = this.nifty50hlrows
        .map(row => row.ohlc.low)
        .filter(low => !isNaN(low));
  
      if (validLows.length > 1) {
        // Sort in ascending order and get the second-lowest value
        const sortedLows = validLows.sort((a, b) => a - b);
        this.secondMinLow = sortedLows[1];  // Second-lowest value
      }
    }
  }
  paginateData(first: number) {
    // Slice the data for the current page based on the starting index and number of rows
    this.paginatedNifty50hlrows = this.nifty50hlrows.slice(first, first + this.rows);
  }
  getArrow(prevQuantity: number | undefined, currentQuantity: number): string {
    if (prevQuantity === undefined) {
      return '-';  // For the first item, there is no previous value
    }
    if (currentQuantity > prevQuantity) {
      return '↑';  // Blue for UP
    } else if (currentQuantity < prevQuantity) {
      return '↓';  // Brownish for DOWN
    } else {
      return '-';  // Gray for no change
    }
  }
  // getMaxHigh(): number {
  //   return this.maxHigh;
  // }

  // // Get the minLow value dynamically (optional method to display it in the template)
  // getMinLow(): number {
  //   return this.minLow;
  // }
  isMaxHigh(high: number): boolean {
    return high === this.maxHigh;
  }

  // Check if a low value is the minimum low
  isMinLow(low: number): boolean {
    return low === this.minLow;
  }

  // Check if a high value is the second-highest high
  isSecondMaxHigh(high: number): boolean {
    return high === this.secondMaxHigh;
  }
  isSecondMinLow(low: number): boolean {
    return low === this.secondMinLow;
  }
}
