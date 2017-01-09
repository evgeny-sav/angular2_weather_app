import {Component, OnInit} from '@angular/core';
import { WeatherService } from "../weather.service";
import {City} from "../../shared/city.model";

@Component({
  selector: 'city-search-bar',
  template: require('./city-search-bar.component.html'),
  styles: [require('./city-search-bar.component.scss')],
  providers: [ WeatherService ]
})
export class CitySearchBarComponent implements OnInit {
  search: string;
  city: City[];
  isLoading: boolean = false;

  // constructor() {
  //   this.search = '';
  // }
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
  }

  filterCities(event: Event, value: string = '') {
    event.preventDefault();
    this.search = value;
  }

  findCities(event: Event, value: string) {
    event.preventDefault();
    this.isLoading = true;
    this.weatherService.getCityWeather(value)
      .then((city: City) => {
        this.isLoading = false;
        this.city = new Array(city);
      });
  }

  resetInput() {
    this.search = '';
  }
}
