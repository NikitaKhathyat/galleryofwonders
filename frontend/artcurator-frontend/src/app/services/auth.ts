import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, tap  } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Auth {
  private loggedIn$ = new BehaviorSubject<boolean>(!!localStorage.getItem('token'));
  isLoggedIn$ = this.loggedIn$.asObservable();

  private BASE_URL = 'http://localhost:8080/api/auth';

  constructor(private http: HttpClient) {}

   // Login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.BASE_URL}/login`, { email, password }).pipe(
      tap((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('email', res.email || '');
        this.loggedIn$.next(true); // notify subscribers
      })
    );
  }

  register(payload: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/register`, payload);
  }
   // Get JWT from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Logout user
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('email'); 
    this.loggedIn$.next(false);
  }
}
