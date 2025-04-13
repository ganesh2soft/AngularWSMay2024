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
          item.result
        ));  // Create Future instances
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
