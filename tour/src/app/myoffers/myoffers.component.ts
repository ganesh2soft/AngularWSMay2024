import { Component, OnInit } from '@angular/core';
import { TourservService } from '../tourserv.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-myoffers',
  templateUrl: './myoffers.component.html',
  styleUrls: ['./myoffers.component.css']
})
export class MyoffersComponent implements OnInit {
  coupon: string = '';

  constructor(private tourservService: TourservService, private http: HttpClient) { }

  ngOnInit() {
    this.tourservService.getCoupon().subscribe(
      (response: string) => {
        this.coupon = response;
      });
  }
}