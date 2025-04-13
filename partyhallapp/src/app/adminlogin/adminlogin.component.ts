import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username = '';
  password = '';
  constructor(private authService: AuthService, private router: Router) { }

  loginadmin(): void {
    this.authService.loginadmin(this.username, this.password)
      .subscribe((loggedIn) => {
        if (loggedIn) {
          this.router.navigate(['/adminmaindashboard']);
        } else {
          window.alert('Admin Username and Password wrong');
          console.log("Admin Username and Password wrong");
        }
      });
  }
}

