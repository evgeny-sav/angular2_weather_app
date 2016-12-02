import { Component, OnInit } from "@angular/core";
import { template } from '../tpl/cards-list.tpl';
import {WeatherService, WeatherData, City} from '../../services/weather.service';

@Component({
  selector: 'cards-list',
  template: template,
  providers: [WeatherService]
})

export class CardsListComponent implements OnInit{
  weatherData: City[];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
   this.getList();
  }

  getList(): void {
    this.weatherService.getWeather()
      .then((data: WeatherData) => {this.weatherData = data.list;});
  }
}
