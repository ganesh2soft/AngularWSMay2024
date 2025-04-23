import { Component, OnInit } from '@angular/core';
import { TradeguidesrvService } from '../tradeguidesrv.service';

interface MainIndexItem {
  index: string;
  symbol: string;
  ltp: number;
}

interface MainIndexResponse {
  timestamp: string;
  main_index: MainIndexItem[];
}

@Component({
  selector: 'app-mainindex',
  templateUrl: './mainindex.component.html',
  styleUrls: ['./mainindex.component.css'],
  standalone: false
})
export class MainindexComponent implements OnInit {

  indexSnapshots: MainIndexResponse[] = [];
  loading = true;
  error: string | null = null;

  constructor(private tradeguideService: TradeguidesrvService) {}

  ngOnInit(): void {
    this.loadMainIndexData();
  }

  loadMainIndexData(): void {
    this.tradeguideService.getmainindex().subscribe({
      next: (data) => {
        this.indexSnapshots = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching main index data:', err);
        this.error = 'Failed to load main index data.';
        this.loading = false;
      }
    });
  }

  getLtpForSymbol(indexList: MainIndexItem[], symbol: string): number {
    const item = indexList.find(i => i.symbol === symbol);
    return item ? item.ltp : 0;
  }
}
