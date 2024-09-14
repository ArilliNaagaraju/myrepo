import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }

  uploadImage(data: FormData): Observable<any> {
    return this.http.post('http://localhost:3000/upload', data);
  }

  getImages(): Observable<any> {
    return this.http.get('http://localhost:3000/images');
  }

}
