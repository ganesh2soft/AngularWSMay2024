import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from './constant';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdsrvService {

  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    return this.http.get(`${AppConstants.PRODUCT_URL}/allProducts`);
  }
}

