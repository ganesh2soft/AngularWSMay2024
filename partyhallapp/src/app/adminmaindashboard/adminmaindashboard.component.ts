import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})


@Component({
  selector: 'app-adminmaindashboard',
  templateUrl: './adminmaindashboard.component.html',
  styleUrl: './adminmaindashboard.component.css'
})
export class AdminmaindashboardComponent {

  constructor(private _snackBar: MatSnackBar, private router:Router) { }

  loggingOut(){
    window.sessionStorage.clear();
    window.alert(" Bye")
    this.router.navigate(['home']);
  }

  openSnackBar(message: string, action: string = 'ok') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }


}
