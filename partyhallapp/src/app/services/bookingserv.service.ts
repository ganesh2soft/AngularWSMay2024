import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingservService {

  constructor(private http: HttpClient) { }

 

  getAllBookings(): Observable<any> {
    return this.http.get(`${AppConstants.BASE_URL}/booking/bookhalldetails`);
  }

  deleteBookings(bookingid: number): Observable<any> {
    return this.http.delete(`${AppConstants.BASE_URL}/booking/deletebooking/${bookingid}`,{ responseType: 'text' });
  }

  updateHall(bookingid: number, data: any): Observable<any> {
    return this.http.put(`${AppConstants.BASE_URL}/booking/updatebookingbybookingid/${bookingid}`, 
              data);
  }
  /*
  Get Booking details of particular Customer based on cust id.
  */
  getBookingbyCustid(custid: number) :Observable<any>{
    return this.http.get<any>(`${AppConstants.BASE_URL}/booking/getbookingbycustid/${custid}`);
  }


}

