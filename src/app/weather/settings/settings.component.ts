import {Component, OnInit} from "@angular/core";
import { WeatherService } from '../weather.service';

@Component({
  selector: 'settings',
  template: require('./settings.component.html'),
})
export class SettingsComponent implements OnInit{
  tempCelsius: boolean;
  tempKelvin: boolean;
  tempFahrenheit: boolean;
  temperature: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.temperature = this.weatherService.getWeatherIn();
    this.setTemp(this.temperature)
  }

  setTemp(temp: string) {
    this.weatherService.setWeatherIn(temp);
    this.toggleTemp(temp);
  }

  toggleTemp(temp: string) {
    if (temp === 'metric'){

      this.tempCelsius = true;
      this.tempKelvin = false;
      this.tempFahrenheit = false;

    } else if (temp === 'default') {

      this.tempCelsius = false;
      this.tempKelvin = true;
      this.tempFahrenheit = false;

    } else if (temp === 'imperial') {

      this.tempCelsius = false;
      this.tempKelvin = false;
      this.tempFahrenheit = true;

    }
  }
}
