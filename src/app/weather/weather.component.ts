import {Component, OnInit, Input} from "@angular/core";
import { WeatherService } from './weather.service';
import { WeatherData, City } from '../shared';


@Component({
  selector: 'weather',
  template: require('./weather.component.html'),
  styles: [require('./weather.component.scss')],
  providers: [ WeatherService ]
})
export class WeatherComponent implements OnInit{
  @Input() searchedCyties: City[];
  weatherData: Promise<City[]>;
  isLoading: boolean = true;
  dateNow: number = Date.now();

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
