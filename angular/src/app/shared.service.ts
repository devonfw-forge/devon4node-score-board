import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from './data/data.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  getFromAPI(): Observable<any> {
    return this.http.get('http://localhost:3000', {
      responseType: 'json',
    });
  }

  updateToAPI(data: DataModel[]): Observable<any> {
    return this.http.post('http://localhost:3000/update', data, {
      responseType: 'json',
    });
  }
}
