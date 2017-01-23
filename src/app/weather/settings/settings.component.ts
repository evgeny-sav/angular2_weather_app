import {Component, OnInit} from "@angular/core";
import { WeatherService } from '../weather.service';

@Component({
  selector: 'settings',
  template: require('./settings.component.html'),
  providers: [WeatherService]
})
export class SettingsComponent implements OnInit{
  tempCelsius: boolean;
  tempKelvin: boolean;
  tempFahrenheit: boolean;
  temperature:string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.temperature = this.weatherService.getWeatherIn();
    this.toggleTemp(this.temperature);
  }

  setTemp(temp: string) {
    this.weatherService.setWeatherIn(temp);
    this.toggleTemp(temp);
  }

  toggleTemp(temp: string) {
    if (temp === 'c'){

      this.tempCelsius = true;
      this.tempKelvin = false;
      this.tempFahrenheit = false;

    } else if (temp === 'k') {

      this.tempCelsius = false;
      this.tempKelvin = true;
      this.tempFahrenheit = false;

    } else if (temp === 'f') {

      this.tempCelsius = false;
      this.tempKelvin = false;
      this.tempFahrenheit = true;

    }
  }
}
