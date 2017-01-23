import {Component, ChangeDetectionStrategy} from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./weather.component.html'),
  styles: [require('./weather.component.scss')],
  providers: [WeatherService]
})
export class WeatherComponent {

}
