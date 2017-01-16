import {Component, OnInit} from "@angular/core";
import {City, WeatherData} from "../../shared";
import { WeatherService } from '../weather.service';

@Component({
  selector: 'search',
  template: require('./search.component.html'),
  styles: [require('./search.component.scss')],
  providers: [ WeatherService ]
})

export class SearchComponent implements OnInit{
  isLoading: boolean = true;
  weatherData: Promise<City[]>;

  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.weatherData = this.getList();
  }

  getList() {
    return this.weatherService.getWeather()
      .then((data: WeatherData) => {
        this.isLoading = false;
        return data.list;
      })
  }
}
