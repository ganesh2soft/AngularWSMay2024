import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import {Router} from '@angular/router'
@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent implements OnInit {
  user = new User();
  constructor(private router:Router) { }

  loggingOut(){
    window.sessionStorage.clear();
    window.alert(" Bye")
    this.router.navigate(['home']);
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('userdetails')) {
      this.user = JSON.parse(sessionStorage.getItem('userdetails') || "");
      console.log("From Mydashboard comp",this.user);
    }
  }
}
