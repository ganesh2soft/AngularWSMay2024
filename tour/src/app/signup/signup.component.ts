import { Component } from '@angular/core';
import { TourservService } from '../tourserv.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  newCustomer: any = {};

  constructor(private tourservService: TourservService) {}

  createNewCustomer() {
    this.tourservService.signupCustomer(this.newCustomer).subscribe((response: any) => {
      console.log('Customer created:', response);
      window.alert("You have been registered! Please login to tour further");
      this.newCustomer = {}; // Clear the form after successful creation
    });
  }

}
