import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpringbootbackendService {


  private apiUrl = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // ===== BATCHES =====
  getAllBatches(): Observable<any> {
    return this.http.get(`${this.apiUrl}/batches`);
  }

  getBatchById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/batches/${id}`);
  }

  deleteBatch(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/batches/${id}`);
  }

  // ===== TRAINERS =====
  addTrainer(trainer: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/trainers`, trainer, this.httpOptions);
  }

  getAllTrainers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/trainers`);
  }

  getTrainerById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/trainers/${id}`);
  }

  deleteTrainer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/trainers/${id}`);
  }

  // ===== VENDORS =====
  addVendor(vendor: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/vendors`, vendor, this.httpOptions);
  }

  getAllVendors(): Observable<any> {
    return this.http.get(`${this.apiUrl}/vendors`);
  }

  getVendorById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/vendors/${id}`);
  }

  deleteVendor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/vendors/${id}`);
  }
}
