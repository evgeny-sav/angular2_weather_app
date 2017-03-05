'use strict';

import WeatherService from './weather.service';
import { Http } from '@angular/http';

describe('Tests for WeatherService', () => {
  let weatherService: WeatherService;
  let http: Http;

  it('should pass', () => {
    http = new Http();
    weatherService = new WeatherService(http);
    weatherService.getCityWeather();
    expect(weatherService.getCityWeather()).toHaveBeenCalled();
  });


});


