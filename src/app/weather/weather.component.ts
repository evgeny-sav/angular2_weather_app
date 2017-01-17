import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'weather',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./weather.component.html'),
  styles: [require('./weather.component.scss')]
})
export class WeatherComponent {}
