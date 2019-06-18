import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from './data/data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: Observable<DataModel>;

  team1: DataModel;
  team2: DataModel;

  private intervalUpdate: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.showData();
    this.intervalUpdate = setInterval(
      function() {
        this.showData();
      }.bind(this),
      500,
    );
  }

  private showData(): void {
    this.getFromAPI().subscribe(
      (response) => {
        if (response.error === false) {
          this.data = response.data;
          // console.log(response);
        } else {
          console.error('ERROR: The response had an error, retrying');
        }
      },
      (error) => {
        console.error('ERROR: Unexpected response');
      },
    );
  }

  private getFromAPI(): Observable<any> {
    return this.http.get('http://localhost:3000', {
      responseType: 'json',
    });
  }
}
