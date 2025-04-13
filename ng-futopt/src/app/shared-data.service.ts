import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Future } from './model/Future.model';  // Import your Future model

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private latestFutureData = new BehaviorSubject<Future | null>(null);  // Store the latest Futures data
  private futuresDataSource = new BehaviorSubject<any[]>([]);  // Create a BehaviorSubject to hold data
  currentFuturesData = this.futuresDataSource.asObservable();
  
  constructor() {}

  setFuturesData(data: any[]) {
    this.futuresDataSource.next(data);  // Update the BehaviorSubject with new data
  }

  // Get Futures Data
  getFuturesData() {
    return this.currentFuturesData;  // Provide the latest data to subscribers
  }
}
