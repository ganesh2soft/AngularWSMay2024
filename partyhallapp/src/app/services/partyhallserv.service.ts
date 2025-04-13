import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConstants } from '../constants';
@Injectable({
  providedIn: 'root'
})
export class PartyhallservService {

    constructor(private _http: HttpClient) {}

  addHall(data: any): Observable<any> {
    return this._http.post(`${AppConstants.BASE_URL}/adminhall/addhall`, data);
  }
  
  updateHall(id: number, data: any): Observable<any> {
    return this._http.put(`${AppConstants.BASE_URL}/adminhall/updatehallbyhallid`, data);
  }

  getAllHallList(): Observable<any> {
    return this._http.get(`${AppConstants.BASE_URL}/adminhall/getallhalls`);
  }

  deleteHall(hallid: number): Observable<any> {
    
    return this._http.delete(`${AppConstants.BASE_URL}/adminhall/deletehall/${hallid}`,{ responseType: 'text' });
  }
}
