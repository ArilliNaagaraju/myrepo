import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FingerprintService {

  private apiUrl = 'http://localhost:3000/api/fingerprint';

  constructor(private http: HttpClient) { }

  scanFingerprint(): Observable<any> {
    return this.http.get(`${this.apiUrl}/scan`);
  }

  saveFingerprint(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, data);
  }
}
