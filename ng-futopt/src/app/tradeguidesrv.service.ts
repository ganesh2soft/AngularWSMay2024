import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Future } from './model/Future.model';  // Import the Future class
import { Callop } from './model/Callop.model';  // Import the Callop class
import { Putop } from './model/Putop.model';  // Import the Putop class
import { Top } from './model/Top.model';  // Import the Top class
import { NiftyOHLCData } from './model/NiftyOHLCData';  // Import the NiftyOHLCData class
interface DashboardData {
  // Define the structure of your dashboard data here
}
interface TrendData {
  // Define the structure of your trend data here
  name: string;
  value: number;
}
interface OptexpData {
  // Define the structure of your optexp data here
}

@Injectable({
  providedIn: 'root'
})
export class TradeguidesrvService {

  private apiUrl = 'http://localhost:5000/api';  // Base URL for your Flask API

  constructor(private http: HttpClient) { }
  
  
  // Get Futures Data
  getFuturesData(): Observable<Future[]> {
    return this.http.get<Future[]>(`${this.apiUrl}/futures`);
  }
  // Get Nifty 50 High/Low Data
  getNifty50HL(): Observable<NiftyOHLCData[]> {
    return this.http.get<NiftyOHLCData[]>(`${this.apiUrl}/getniftyhl`);
    
  }
  // Get Dashboard Data
  getDashboardData(): Observable<DashboardData> {
    return this.http.get<DashboardData>(`${this.apiUrl}/dashboard`);
  }

  getPremium(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getpremium`);
  }
    // Fetch Trend Data

  getTrendData(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/trend`);
  }
  
  gettopbank5(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/gettopbank5`);
  }
  gettopnifty10(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/gettopnifty10`);
  }
  gettopmidcap5(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/gettopmidcap5`);  // Make sure the API endpoint exists
  }
   // Fetch the options data (call and put data)
   getOptionsData(): Observable<{ expiry_dates: string[], call_options: Callop[], put_options: Putop[] }> {
    return this.http.get<{ expiry_dates: string[], call_options: Callop[], put_options: Putop[] }>(`${this.apiUrl}/options`);
  }
  placeOrder(orderData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      
    });

    return this.http.post(`${this.apiUrl}/postorder/orderitems`, JSON.stringify(orderData), { headers:headers, withCredentials: true});
  }

}
