import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class AvailservService {


  constructor(private _http: HttpClient) {}

  addAvail(data: any): Observable<any> {
    return this._http.post(`${AppConstants.BASE_URL}/availadmin/addavail`, data);
  }
  
  updateAvail(availid: number, data: any): Observable<any> {
    return this._http.put(`${AppConstants.BASE_URL}/availadmin/updateavailbyavailid/${availid}`
            , data);
  }

  getAllAvailList(): Observable<any> {
    return this._http.get(`${AppConstants.BASE_URL}/availadmin/getallavail`);
  }

  deleteAvail(availid: number): Observable<any> {
    console.log('At Service level check',availid);
    return this._http.delete(`${AppConstants.BASE_URL}/availadmin/deleteavail/${availid}`,{ responseType: 'text' });
  }
}
