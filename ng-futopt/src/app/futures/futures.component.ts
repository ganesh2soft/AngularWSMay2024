import { Component, OnInit } from '@angular/core';
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

  constructor(private sharedDataService: SharedDataService) {}

  ngOnInit(): void {
    // Futures data (with trend_type already computed) now comes from the
    // shared service, so it's available here even if this page hasn't
    // fetched it itself yet.
    this.sharedDataService.getFuturesData().subscribe(
      (data) => {
        this.futurerows = data;
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
