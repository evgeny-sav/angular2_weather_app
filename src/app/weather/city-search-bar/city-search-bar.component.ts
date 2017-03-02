import {Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { WeatherService } from '../weather.service';
import {City} from '../../shared';
import { LoggerService } from '../../shared/logger.service';

@Component({
  selector: 'city-search-bar',
  templateUrl: './city-search-bar.component.html',
  styleUrls: ['./city-search-bar.component.scss'],
  providers: [ WeatherService, LoggerService ]
})
export class CitySearchBarComponent implements OnInit {
  search: string = '';
  city: City[];
  isLoading: boolean = false;

  constructor(private weatherService: WeatherService, private loggerService: LoggerService) {}

  ngOnInit() {
  }

  filterCities(event: Event, value: string = '', searchForm: NgForm) {
    event.preventDefault();
    console.log(searchForm);
    if (value.length < 4) {
      return;
    }
    this.search = value;
  }

  findCities(event: Event, value: string) {
    event.preventDefault();
    this.isLoading = true;
    this.loggerService.log('Getting ' + value + ' city data ...');
    this.weatherService.getCityWeather(value)
      .then((city: City) => {
        this.isLoading = false;
        this.loggerService.log('Got ' + value + ' city data.');
        this.city = new Array(city);
      });
  }

  resetInput() {
    this.search = '';
  }
}
