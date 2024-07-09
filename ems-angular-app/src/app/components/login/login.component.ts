import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Staff } from 'src/app/staff';
import { StaffService } from 'src/app/staff.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginnuser=new Staff();
 
  errorMessage = 'Invalid Credentials';
  successMessage?: string;
  invalidLogin = false;
  loginSuccess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private staffService: StaffService) { }
    
  ngOnInit() {

  }
  loginform = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });


  get Email(): FormControl {
    return this.loginform.get('email') as FormControl;
  }

  get Password(): FormControl {
    return this.loginform.get('password') as FormControl;
  }




 


  validLogin() {
    
    
    this.staffService.authenticationService(this.Email.value, this.Password.value).subscribe((result) => {
      this.invalidLogin = false;
      this.loginSuccess = true;
      console.log(this.successMessage = 'Login Successful.');
    
      this.router.navigate(['/profile']);
    }, () => {
      this.invalidLogin = true;
      this.loginSuccess = false;
    });
    
  }
}

