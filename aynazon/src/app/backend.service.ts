import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppConstants } from './constant';
@Injectable({
  providedIn: 'root'
})
export class BackendService {
itemEntity:any={}
  constructor(private http: HttpClient) { }
  getItemsList(): Observable<any> {
    return this.http.get(`${AppConstants.BASE_URL}/allitems`);
  }
  addItem(itemEntity:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${AppConstants.BASE_URL}/additem`, itemEntity, httpOptions);
  }

}
