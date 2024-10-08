import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  private apiUrl = 'http://localhost:3000/api/credit-unions';

  constructor(private http: HttpClient) {}

  getBankDetails(bankId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${bankId}`);
  }
}
