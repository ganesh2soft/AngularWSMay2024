import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants';
;
@Injectable({
  providedIn: 'root'
})
export class HomeservService {

  constructor(private http: HttpClient) { }

  getWelcome() {
    return this.http.get<string>(`${AppConstants.BASE_URL}/booking/welcome`, { responseType: 'text' as 'json' });
  }

  
}