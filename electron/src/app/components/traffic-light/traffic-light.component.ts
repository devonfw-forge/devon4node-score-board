import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-traffic-light',
  templateUrl: './traffic-light.component.html',
  styleUrls: ['./traffic-light.component.scss'],
})
export class TrafficLightComponent implements OnInit, OnChanges {
  @Input() lightState: string;
  @Input() lightBlink: boolean;

  color1Selected = false;
  color2Selected = false;
  color3Selected = false;

  color1Blink = false;
  color2Blink = false;
  color3Blink = false;

  constructor() {}

  ngOnInit() {
    switch (this.lightState) {
      case 'green':
        this.color3Selected = true;
        if (this.lightBlink) {
          this.color3Blink = true;
        }
        break;
      case 'yellow':
        this.color2Selected = true;
        if (this.lightBlink) {
          this.color2Blink = true;
        }
        break;
      case 'red':
        this.color1Selected = true;
        if (this.lightBlink) {
          this.color1Blink = true;
        }
        break;
    }
  }
  ngOnChanges() {
    this.color1Selected = false;
    this.color2Selected = false;
    this.color3Selected = false;
    switch (this.lightState) {
      case 'green':
        this.color3Selected = true;
        if (this.lightBlink) {
          this.color3Blink = true;
        }
        break;
      case 'yellow':
        this.color2Selected = true;
        if (this.lightBlink) {
          this.color2Blink = true;
        }
        break;
      case 'red':
        this.color1Selected = true;
        if (this.lightBlink) {
          this.color1Blink = true;
        }
        break;
    }
  }
}
