import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants';
import { Observable } from 'rxjs';
import {Customer} from '../model/CustomerModel'
@Injectable({
  providedIn: 'root'
})
export class CustomerservService {

  constructor(private http: HttpClient) { }

  signupCustomer(customer: Customer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${AppConstants.BASE_URL}/customer/createcustomer`, customer, httpOptions);
  }

/*
  JWT Angular Logic
  // Login Business logic! It uses Observable not promise
  login(username: string, password: string):Observable<any> {

    const cdata: Map<string, any> = new Map();
    cdata.set('username', username);
    cdata.set('password', password);


    const base64Credentials = btoa(`${username}:${password}`);
    console.log(base64Credentials);
    const headers = new HttpHeaders({
      'Authorization': `Basic ${base64Credentials}`,
      'Content-Type': 'application/json',
      'responseType': 'json'

    });
    console.log(headers.get('Authorization'));
    console.log("one two three ", headers);
   return this.http.get(`${AppConstants.BASE_URL}/customer/customerlogin`,{headers,observe: 'response' });
   
  }
  */
  login(username: string, password: string):Observable<any> {  
    const headers=new HttpHeaders({
      'Authorization':'Basic ' + btoa(username+":"+password), 
      'Content-Type': 'application/json',
      'responseType': 'json'})
    return this.http.get(`${AppConstants.BASE_URL}/customer/customerlogin`,{headers, observe:'response'});
  }

  getAllCustomers(): Observable<Customer[]> {
    console.log('Fine');
    return this.http.get<Customer[]>(`${AppConstants.BASE_URL}/customer/allcustomers`);
  }

  deleteCust(id: number): Observable<any> {
    return this.http.delete(`${AppConstants.BASE_URL}/customer/deletecust/${id}`,{ responseType: 'text' });
  }
  
  updateCust(custid: number, data: any): Observable<any> {
    return this.http.put(`${AppConstants.BASE_URL}/customer/updatecustbycustid/${custid}`, data);
  }
}
