import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TourservService {
  private baseUrl = 'http://localhost:8444';
  constructor(private http: HttpClient) { }
  body: any = {}

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   }),
  // };

  getWelcome() {
    return this.http.get<string>(`${this.baseUrl}/welcome`, { responseType: 'text' as 'json' });
  }
  getCoupon() {
    return this.http.get<string>(`${this.baseUrl}/myoffers`, { responseType: 'text' as 'json' });
  }
  signupCustomer(customer: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${this.baseUrl}/signup`, customer, httpOptions);
  }

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
   return this.http.get(`${this.baseUrl}/login`,{headers,observe: 'response' });
   
  }


}


  // login(custemail: string, password: string): Observable<any> {
  //   const body = JSON.stringify({
  //     username: custemail,
  //     password: password

  //   });




//   //  console.log(body.username);
//    console.log("This is the object",body);

//  //  const headers = new HttpHeaders({ Authorization: 'Basic' + btoa(body),'Content-Type': 'application/json' });
//  const headers=new HttpHeaders()
//    console.log("Header printout",body);
//     return this.http.post(`${this.baseUrl}/login`, body, this.headers);
//   }
