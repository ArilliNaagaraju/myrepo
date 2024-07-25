import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private apiUrl = 'http://localhost:3011';

  constructor(private http: HttpClient) {}

  signUp(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, { email, password });
  }

  signIn(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/signin`, { email, password });
  }

  sendCode(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/sendcode`, { email });
  }

  verifyCode(email: string, code: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/verifycode`, { email, code });
  }

  resetPassword(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/resetpassword`, { email, password });
  }
  checkEmail(email: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/checkemail`, { email });
  }
}
