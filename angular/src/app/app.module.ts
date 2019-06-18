import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [AppComponent, BarChartComponent, TrafficLightComponent, HomeComponent, UpdateComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
