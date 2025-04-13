import { Component } from '@angular/core';
import { CustomerservService } from '../services/customerserv.service';
import { Customer } from '../model/CustomerModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  newCustomer: any = {};

  constructor(private customerservService: CustomerservService, private router: Router) {}

  createNewCustomer() {
    this.customerservService.signupCustomer(this.newCustomer).subscribe((response: any) => {
      console.log('Customer created:', response);
      window.alert("You have been registered! Please login to visit further");
      this.newCustomer = {}; // Clear the form after successful creation
      this.router.navigate(['home']);
    });
  }

}
