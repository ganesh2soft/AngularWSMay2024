import { Component, OnInit } from '@angular/core';
import { TradeguidesrvService } from  '../tradeguidesrv.service';
import { Callop } from '../model/Callop.model';
import { Putop } from '../model/Putop.model';
import { PageheaderComponent } from '../pageheader/pageheader.component';

@Component({
    selector: 'app-optionchain',
    templateUrl: './optionchain.component.html',
    styleUrls: ['./optionchain.component.css'],
    standalone: false
})
export class OptionchainComponent implements OnInit {
  expiryDates: string[] = [];
  selectedExpiryDate: string = '';
  call_options: Callop[] = [];
  put_options: Putop[] = [];
  filteredCallOptions: Callop[] = [];
  filteredPutOptions: Putop[] = [];

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
    }
  }

  // Method to handle the change in expiry date selection
  onExpiryDateChange(): void {
    this.filterOptionsByExpiry();  // Re-filter the options based on the new selected expiry date
  }
}
