import { Component, Input } from "@angular/core";
import { WeatherData } from "../../shared";


@Component({
  selector: 'city-card',
  template: require('./city-card.component.html'),
  styles: [require('./city-card.component.scss')]
})
export class CityCardComponent {
  @Input() cityWeather: WeatherData;
  @Input() search: string = '';
}
