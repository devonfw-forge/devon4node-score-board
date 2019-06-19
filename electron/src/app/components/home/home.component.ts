import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataModel } from '../../data/data.model';
import { SharedService } from '../../providers/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // data: Observable<DataModel>;
  data: DataModel[];

  team1: DataModel;
  team2: DataModel;

  private intervalUpdate: any = null;

  constructor(private readonly shared: SharedService) {}

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
    // console.log(this.data);
    // this.shared.getFromAPI();
    this.shared.getFromAPI().subscribe(
      (response) => {
        // console.log(response);
        // if (response.error === false) {
        this.data = response;
        // console.log(response);
        // } else {
        //   console.error('ERROR: The response had an error, retrying');
        // }
      },
      (error) => {
        console.error('ERROR: Unexpected response', error);
      },
    );
  }
}
