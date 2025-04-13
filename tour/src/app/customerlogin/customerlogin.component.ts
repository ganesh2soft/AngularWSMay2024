import { Component } from '@angular/core';
import { TourservService } from '../tourserv.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { LoadingService } from '../loadingservice';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})

export class CustomerloginComponent {
  model = new User();
  /*
 requser uses for outgoing request to the server
  model uses for incoming response from the server
  */

  requser = {
    custemail: '',
    password: ''
  };

  constructor(private tourservService: TourservService, private router: Router, public loadingServ: LoadingService) { }
  /*
  loadingServ is for spinner!! 
  */

  /*
      In JavaScript and TypeScript, async is used as a modifier before a function declaration or expression
      to indicate that the function is asynchronous. It allows the use of the await keyword inside the function to pause execution 
      until a promise is resolved or rejected.
  */

  onSubmit() {


    this.tourservService.login(this.requser.custemail, this.requser.password).subscribe((response) => {

      console.log("zero", response.headers.get('Authorization'))
      window.sessionStorage.setItem("Authorization", response.headers.get('Authorization')!);
      this.model = <any>response.body;
      this.model.authStatus = 'AUTH';
      window.sessionStorage.setItem("userdetails", JSON.stringify(this.model));
      this.router.navigate(['mydashboard']);
    });

  }
}
