import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { AppConstants } from './constant';
import { ProductDetails } from './product.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductservService {

  constructor(private http: HttpClient) { }
  

  getProductList(): Observable<any> {
    return this.http.get(`${AppConstants.BASE_URL}`);
  }
  addProduct(productDetails: ProductDetails) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`${AppConstants.BASE_URL}`, productDetails, httpOptions);
  }
}
