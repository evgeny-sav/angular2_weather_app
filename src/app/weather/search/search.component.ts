import {Component, OnInit} from '@angular/core';
import {City, WeatherData} from '../../shared';
import { WeatherService } from '../weather.service';
import { LoggerService } from '../../shared/logger.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [ WeatherService, LoggerService ]
})

export class SearchComponent implements OnInit{
  isLoading: boolean = true;
  weatherData: Promise<City[]>;

  constructor(private weatherService: WeatherService, private loggerService: LoggerService) {}
  ngOnInit() {
    this.loggerService.log('Search component');
    this.weatherData = this.getList();
  }

  getList() {
    this.loggerService.log('Getting cities data ...');
    return this.weatherService.getWeather()
      .then((data: WeatherData) => {
        this.loggerService.log('Got cities data.');
        this.isLoading = false;
        return data.list;
      })
  }
}
