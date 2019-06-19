import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataModel } from '../data/data.model';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(
    private http: HttpClient,
    private electronService: ElectronService,
  ) {}

  getFromAPI(): Observable<any> {
    return new Observable((observer) => {
      const res = this.electronService.ipcRenderer.sendSync(
        'get-from-api',
        'ping',
      );
      if (res.err) {
        observer.error(res.err);
      } else {
        observer.next(res.data);
        observer.complete();
      }
    });
  }

  updateToAPI(data: DataModel[]): Observable<any> {
    return this.http.post('http://localhost:3000/update', data, {
      responseType: 'json',
    });
  }
}
