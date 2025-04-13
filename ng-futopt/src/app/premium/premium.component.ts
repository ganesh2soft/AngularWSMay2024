import { Component ,OnInit} from '@angular/core';
import { TradeguidesrvService } from '../tradeguidesrv.service';
export interface PremiumEntry {
  recdate: string;
  totcallltp: number;
  totputltp: number;
  sample_call_tot: number;
  sample_put_tot: number;
}

@Component({
  selector: 'app-premium',
  standalone: false,
  templateUrl: './premium.component.html',
  styleUrl: './premium.component.css'
})
export class PremiumComponent implements OnInit {

 
  premiumData: PremiumEntry[] = [];

  constructor(private tgsrv: TradeguidesrvService) {}

  ngOnInit(): void {
    this.tgsrv.getPremium().subscribe({
      next: (res) => {
        this.premiumData = res.premium_set;
      },
      error: (err) => {
        console.error('Failed to load premium data:', err);
      }
    });
  }
}