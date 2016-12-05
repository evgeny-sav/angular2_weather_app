import { Component, OnInit } from '@angular/core';
import {WeatherService, WeatherData, City} from './weather.service';

@Component({
  selector: 'cards-list',
  template: 'require("./card-list.component.html")',
  providers: [WeatherService]
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
