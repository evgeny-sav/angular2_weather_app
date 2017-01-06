import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData, City } from '../shared';


@Component({
  selector: 'weather',
  template: require('./weather.component.html'),
  styles: [require('./weather.component.scss')],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit{
  @Input() header: any;
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
