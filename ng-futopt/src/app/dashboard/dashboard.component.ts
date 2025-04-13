import { Component, OnInit } from '@angular/core';
import { TradeguidesrvService } from '../tradeguidesrv.service';
import { SharedDataService } from '../shared-data.service';
import { Future } from '../model/Future.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: false
})
export class DashboardComponent implements OnInit {
  trendData: any = null;  // Store the trend data
  latestFutureData: Future | null = null; 
  latestVixData: any[] = [];
  pcrData: any[] = [];  // The full list of pcrData
  groupedPcrData: any = {};  // To store the grouped data by expiry date
  vix_set: any[] = [];
  pcr_set: any[] = [];

  constructor(
    private tradeguidesrvService: TradeguidesrvService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit(): void {
    this.fetchTrendData();
    this.fetchLatestFutureData();
  }

  // Fetch latest future data
  fetchLatestFutureData(): void {
    this.sharedDataService.getFuturesData().subscribe(
      (data: Future[]) => {
        if (data && data.length > 0) {
          const sortedData = data.sort((a, b) => new Date(b.ts).getTime() - new Date(a.ts).getTime());
          this.latestFutureData = sortedData[0];
          console.log('Latest Future data fetched successfully', this.latestFutureData);
        } else {
          console.log('No future data available');
        }
      },
      (error) => {
        console.error('Error fetching latest future data', error);
      }
    );
  }

  // Fetch trend data and group PCR data by expiry
  fetchTrendData(): void {
    this.tradeguidesrvService.getTrendData().subscribe(
      (data) => {
        
        this.vix_set = data.vix_set || [];
        this.pcr_set = data.pcr_set || [];
        this.latestVixData = this.extractLastFiveVixData(this.vix_set);
        this.pcrData = this.extractLastHundredPcrData(this.pcr_set);
        this.groupPcrDataByExpiry();  // Group the pcrData by expiry date
        console.log('Trend data fetched successfully', this.trendData);
      },
      (error) => {
        console.error('Error fetching trend data', error);
      }
    );
  }
  groupPcrDataByExpiry(): void {
    this.groupedPcrData = this.pcrData.reduce((acc, pcr) => {
      // Log the expiry date to see if it's correct
      console.log('Expiry:', pcr.expiry);  // Debugging line
      
      // Create a new group for each expiry date
      if (!acc[pcr.expiry]) {
        acc[pcr.expiry] = [];
      }
      acc[pcr.expiry].push(pcr);
      return acc;
    }, {});
  
    console.log('Grouped PCR Data:', this.groupedPcrData);  // Log grouped data for debugging
  }
  
  

  // Extract the last 100 PCR data
  extractLastHundredPcrData(data: any[]) {
    const pcrData = data.filter(item => item.tpcr !== null && item.tpcr !== undefined);
    return pcrData.slice(-100);  // Get the last 100 entries
  }

  // Extract the last 6 VIX data
  extractLastFiveVixData(data: any[]) {
    const vixData = data.filter(item => item.ivix !== null && item.ivix !== undefined);
    return vixData.slice(-6);  // Get the last 5 entries
  }
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
   difference(value1: number, value2: number): number {
    return Math.abs(value1 - value2); // Absolute difference between value1 and value2
  }
  
}
