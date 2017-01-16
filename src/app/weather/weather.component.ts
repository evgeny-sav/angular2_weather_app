import {Component, ChangeDetectionStrategy} from '@angular/core';
import { City } from '../shared';


@Component({
  selector: 'weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./weather.component.html'),
  styles: [require('./weather.component.scss')]
})
export class WeatherComponent {
  dateNow: number = Date.now();

  favCities: City[] = JSON.parse(localStorage.getItem('favCities'));
  addedCities: City[] = JSON.parse(localStorage.getItem('addedCities'));


}
