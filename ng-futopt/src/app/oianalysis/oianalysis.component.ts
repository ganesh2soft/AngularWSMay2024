import { Component, OnInit } from '@angular/core';
import { TradeguidesrvService } from '../tradeguidesrv.service';
import { Callop } from '../model/Callop.model';
import { Putop } from '../model/Putop.model';
@Component({
  selector: 'app-oianalysis',
  standalone: false,
  templateUrl: './oianalysis.component.html',
  styleUrl: './oianalysis.component.css'
})
export class OianalysisComponent implements OnInit {
  expiryDates: string[] = [];
  selectedExpiryDate: string = '';
  call_options: Callop[] = [];
  put_options: Putop[] = [];
  filteredCallOptions: Callop[] = [];
  filteredPutOptions: Putop[] = [];
  top5CallOI: Callop[] = [];
  bottom5CallOI: Callop[] = [];
  top5PutOI: Putop[] = [];
  bottom5PutOI: Putop[] = [];


  constructor(private tradeGuideService: TradeguidesrvService) { }

  ngOnInit(): void {
    // Fetch the options data
    this.tradeGuideService.getOptionsData().subscribe(response => {
      if (response) {
        this.expiryDates = response.expiry_dates;
        this.call_options = response.call_options;
        this.put_options = response.put_options;
        console.log(this.expiryDates, this.call_options, this.put_options);
        // Default selection of expiry date if available
        if (this.expiryDates.length > 0) {
          this.selectedExpiryDate = this.expiryDates[0];
          console.log(this.selectedExpiryDate);
          this.filterOptionsByExpiry();  // Filter the options based on the default expiry date
        }
      }
    });
  }

  // Method to filter options based on the selected expiry date
  filterOptionsByExpiry(): void {
    if (this.selectedExpiryDate) {
      this.filteredCallOptions = this.call_options.filter(
        (call) => call.expiry_date === this.selectedExpiryDate
      );
      console.log(this.filteredCallOptions);
      this.filteredPutOptions = this.put_options.filter(
        (put) => put.expiry_date === this.selectedExpiryDate
      );
    
      this.top5CallOI = this.filteredCallOptions.sort((a, b) => b.call_writer_oi - a.call_writer_oi).slice(0, 5); // Top 5 highest OI
      this.bottom5CallOI = this.filteredCallOptions.sort((a, b) => a.call_writer_oi - b.call_writer_oi).slice(0, 5); // Bottom 5 lowest OI

      // Sort put options by open interest and get top 5 and bottom 5
      this.top5PutOI = this.filteredPutOptions.sort((a, b) => b.put_writer_oi - a.put_writer_oi).slice(0, 5); // Top 5 highest OI
      this.bottom5PutOI = this.filteredPutOptions.sort((a, b) => a.put_writer_oi - b.put_writer_oi).slice(0, 5); // Bottom 5 lowest OI

      console.log('Top 5 Call OI:', this.top5CallOI);
      console.log('Bottom 5 Call OI:', this.bottom5CallOI);
      console.log('Top 5 Put OI:', this.top5PutOI);
      console.log('Bottom 5 Put OI:', this.bottom5PutOI);
    }
  }
  // Method to handle the change in expiry date selection
  onExpiryDateChange(): void {
    this.filterOptionsByExpiry();  // Re-filter the options based on the new selected expiry date
  }
}
