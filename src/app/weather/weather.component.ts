import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData, City } from '../shared';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./weather.component.html'),
  styles: [require('./weather.component.scss')],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit{
  @Input() header: HeaderComponent;
  @Input() searchedCyties: City[];
  weatherData: Promise<City[]>;
  isLoading: boolean = true;
  dateNow: number = Date.now();
  favCities: City[] = JSON.parse(localStorage.getItem('favCities'));

  constructor(private weatherService: WeatherService) {}
  ngOnInit() {
    this.weatherData = this.getList();
    console.log(this.favCities)
  }

  getList() {
    return this.weatherService.getWeather()
      .then((data: WeatherData) => {
        this.isLoading = false;
        return data.list;
      })
  }
}
