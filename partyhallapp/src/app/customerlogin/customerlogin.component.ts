import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../model/CustomerModel';
import { CustomerservService } from '../services/customerserv.service';
import { LoadingservService } from '../services/loadingserv.service';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})

export class CustomerloginComponent {
  model: any = {}

  /*
  model = new Customer();
 requser uses for outgoing request to the server
  model uses for incoming response from the server
  */

  requser = {
    custemail: '',
    password: ''
  };

  constructor(private customerservService: CustomerservService, private router: Router, public loadingservService: LoadingservService) { }
  /*
  loadingServ is for spinner!! 
  */

  /*
      In JavaScript and TypeScript, async is used as a modifier before a function declaration or expression
      to indicate that the function is asynchronous. It allows the use of the await keyword inside the function to pause execution 
      until a promise is resolved or rejected.
  */

  onSubmit() {


    this.customerservService.login(this.requser.custemail, this.requser.password).subscribe((response) => {

      console.log("zero", response.headers.get('Authorization'))
      window.sessionStorage.setItem("Authorization", response.headers.get('Authorization')!);
      this.model = <any>response.body;
      //   this.model.authStatus = 'AUTH';
      window.sessionStorage.setItem("userdetails", JSON.stringify(this.model));
      const userDetailsString = sessionStorage.getItem("userdetails");
      if (userDetailsString) {
        const userDetails = JSON.parse(userDetailsString);

        // Log or display the user details
        console.log('sfjsjfklslfjsljfs',userDetails);
      } else {
        console.log("User details not found in session storage");
      }


      console.log('this model is fine', this.model)

      this.router.navigate(['mydashboard']);
    });

  }
}
