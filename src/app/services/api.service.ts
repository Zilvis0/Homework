import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postForm(formData: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-API-KEY': 'swb-222222',
      }),
    };
    return this.http.post('/api', JSON.stringify(formData), httpOptions);
  }
}
