import { Component, OnInit } from '@angular/core';
import { TourservService } from '../tourserv.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html'  
 
})
export class HomeComponent implements OnInit {
  messagefromspring:string='';

  constructor(private tourservService: TourservService, private http:HttpClient) 
  {}

  ngOnInit() {
     this.tourservService.getWelcome().subscribe(
      (response:string) => {
        this.messagefromspring=response;
      },
        (error: any) => {
          console.error('Error:', error);
          this.messagefromspring = ' An error occurred communicating with the server';
        }
     );
      }

}


