import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  loginadmin(username: string, password: string): Observable<boolean> {
    // For simplicity, hardcode credentials
    if (username === 'admin' && password === '12345') {
      this.isLoggedIn = true;
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
