import { Component, OnInit } from '@angular/core';
import { TradeguidesrvService } from '../tradeguidesrv.service';  // Import the updated service
import { Future } from '../model/Future.model';  // Import the Future class

import { SharedDataService } from '../shared-data.service';
@Component({
    selector: 'app-futures',
    templateUrl: './futures.component.html',
    styleUrls: ['./futures.component.css'],
    standalone: false
})
export class FuturesComponent implements OnInit {

  futurerows: Future[] = [];

  constructor(private tradeguidesrv: TradeguidesrvService,private sharedDataService: SharedDataService) {}  // Inject the updated service

  ngOnInit(): void {
    // Fetch the futures data when the component initializes
    this.tradeguidesrv.getFuturesData().subscribe(
      (data) => {
        this.futurerows = data.map(item => new Future(
          item.ts,
          item.last_price,
          item.symbol,
          item.oi,
          item.total_buy_quantity,
          item.total_sell_quantity,
          item.volume,
          item.result,
          item.trend_type  // Pass trend_type if available
        )); 
        for (let i = 1; i < this.futurerows.length; i++) {
          const current = this.futurerows[i];
          const prev = this.futurerows[i - 1];
  
          const priceChange = current.last_price - prev.last_price;
          const oiChange = current.oi - prev.oi;
  
          if (priceChange > 0 && oiChange > 0) {
            
            current.trend_type = "Long Build-up";
          } else if (priceChange > 0 && oiChange < 0) {
            
            current.trend_type = "short Covering";
          } else if (priceChange < 0 && oiChange > 0) {
           
            current.trend_type = "Long Unwinding";
          } else if (priceChange < 0 && oiChange < 0) {
            
            current.trend_type = "short Build-up";
          } else {
            
            current.trend_type = "Neutral";
          }
        } // Create Future instances
        this.sharedDataService.setFuturesData(this.futurerows)
      },
      (error) => {
        console.error('Error fetching data from Flask API', error);
      }
    );
  }

  getArrow(prevQuantity: number, currentQuantity: number): string {
    if (currentQuantity > prevQuantity) {
      return '↑';  // Blue for UP
    } else if (currentQuantity < prevQuantity) {
      return '↓';  // Brownish for DOWN
    } else {
      return '-';  // Gray for no change
    }
  }
  
}
