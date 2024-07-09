import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeservService } from '../services/homeserv.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  export class HomeComponent implements OnInit {

    messagefromspring: string = '';
    constructor(private router: Router,private homeservService :HomeservService ) { }
    ngOnInit() {
      this.homeservService.getWelcome().subscribe(
        (response: string) => {
          this.messagefromspring = response;
        },
        (error: any) => {
          console.error('Error:', error);
          this.messagefromspring = ' An error occurred communicating with the server';
        }
      );
    }
  
    userdetails() {
      this.router.navigate(['userDetails'])
    }

    loggedin() {
      return localStorage.getItem('user');
    }
    onLogout() {
      if
        (window.confirm('Are you sure , you want to logout')) {
        localStorage.removeItem('user');
      }
    }

    adminlogin() {
      return localStorage.getItem('admin');
    }
    Logout() {
      if
        (window.confirm('Are you sure , you want to logout')) {
        localStorage.removeItem('admin');
      }

    }
  
  }
