import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import { WeatherService } from './weather/weather.service';


@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})

export class AppComponent implements OnInit{

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    if (_.isNull(localStorage.getItem('favCities'))) {
      localStorage.setItem('favCities', JSON.stringify([]))
    }
    if (_.isNull(localStorage.getItem('addedCities'))) {
      localStorage.setItem('addedCities', JSON.stringify([]))
    }
  }
}
