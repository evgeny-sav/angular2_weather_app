import { Component, OnInit } from '@angular/core';
import { WeatherService, WeatherData, City } from './weather.service';

@Component({
  selector: 'cards-list',
  template: `
    <div id="loader-box" class="text-center" [class.hidden]="!isLoading"><div class="loader"></div></div>
    <card *ngFor="let city of weatherData" [city]="city" ></card>`,
  // styles: [require('./cards-list.scss')],
  providers: [ WeatherService ]
})

export class CardsListComponent implements OnInit{
  weatherData: City[];
  isLoading: boolean = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
   this.getList();
  }

  getList(): void {
    this.weatherService.getWeather()
      .then((data: WeatherData) => {
        this.weatherData = data.list;
        this.isLoading = false;
      });
  }
}
