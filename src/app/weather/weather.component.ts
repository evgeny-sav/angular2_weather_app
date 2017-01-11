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
  weatherData: Promise<City[]>;
  isLoading: boolean = true;
  temperature:string;
  dateNow: number = Date.now();
  favCities: City[] = JSON.parse(localStorage.getItem('favCities'));
  addedCities: City[] = JSON.parse(localStorage.getItem('addedCities'));

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
  toggleTemp(temp: string) {
    this.temperature = temp;
  }
}
