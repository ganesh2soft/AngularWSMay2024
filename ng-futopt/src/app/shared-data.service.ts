import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Future } from './model/Future.model';  // Import your Future model
import { TradeguidesrvService } from './tradeguidesrv.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private latestFutureData = new BehaviorSubject<Future | null>(null);  // Store the latest Futures data
  private futuresDataSource = new BehaviorSubject<Future[]>([]);  // Create a BehaviorSubject to hold data
  currentFuturesData = this.futuresDataSource.asObservable();

  constructor(private tradeguidesrv: TradeguidesrvService) {
    // Fetch once here so Futures data (with trend_type) is available to any
    // subscriber (Dashboard, Futures page) regardless of navigation order.
    this.fetchFuturesData();
  }

  fetchFuturesData(): void {
    this.tradeguidesrv.getFuturesData().subscribe(
      (data) => {
        const futurerows: Future[] = data.map(item => new Future(
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

        for (let i = 1; i < futurerows.length; i++) {
          const current = futurerows[i];
          const prev = futurerows[i - 1];

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

        this.futuresDataSource.next(futurerows);  // Update the BehaviorSubject with new data
      },
      (error) => {
        console.error('Error fetching futures data from Flask API', error);
      }
    );
  }

  setFuturesData(data: Future[]) {
    this.futuresDataSource.next(data);  // Allow manual refresh/override of the shared data
  }

  // Get Futures Data
  getFuturesData() {
    return this.currentFuturesData;  // Provide the latest data to subscribers
  }
}
