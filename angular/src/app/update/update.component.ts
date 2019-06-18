import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DataModel } from '../data/data.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  model: DataModel[];
  colors = ['green', 'yellow', 'red'];
  constructor(private shared: SharedService) {}

  ngOnInit() {
    this.shared.getFromAPI().subscribe(
      (response) => {
        if (response.error === false) {
          this.model = response.data;
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

  onSubmit() {
    console.log(this.model);
    this.shared.updateToAPI(this.model).subscribe(
      (response) => {
        if (response.error === false) {
          console.log(response);
        } else {
          console.error('ERROR: The response had an error, retrying');
        }
      },
      (error) => {
        console.error('ERROR: Unexpected response');
      },
    );
    // this.submitted = true;
  }
}
