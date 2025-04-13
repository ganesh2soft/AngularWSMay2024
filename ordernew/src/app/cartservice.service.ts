import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from './constant';
@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  constructor(private http: HttpClient) { }

  //Function to do fetch the stock details as soon as order page loaded
  getStock(productId: any): Observable<any> {
    return this.http.get(`${AppConstants.ORDER_URL}/precheckstock/${productId}`);
  }
  //Triggered as order button clicked
  addOrder(orderEntity: any) {
   
    console.log("From Service", orderEntity)
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${AppConstants.ORDER_URL}/addOrder`, orderEntity, httpOptions);
  }


  updateStockFeign(productId: number, stockUnits: number) {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(`${AppConstants.ORDER_URL}/updateStockbyProd/${productId}/${stockUnits}`, null,httpOptions);
  }

}
