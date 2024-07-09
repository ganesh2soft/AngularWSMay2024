import { Component } from '@angular/core';
import { MatGridList } from '@angular/material/grid-list';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';
@Component({
  selector: 'app-visithalls',
  templateUrl: './visithalls.component.html',
  styleUrl: './visithalls.component.css'
})
export class VisithallsComponent {
constructor(private router:Router){}

  Logout() {
    if
      (window.confirm('Are you sure , you want to logout')) {
      localStorage.removeItem('userdetails');
      this.router.navigate(['home']);
    }
}
}
