import {Component, Input} from '@angular/core';

@Component({
  selector: 'google-map',
  template: require('./google-map.component.html'),
  styles: [require('./google-map.component.scss')]
})

export class GoogleMapComponent {
  @Input() lat: number;
  @Input() lng: number;
  @Input() cityName: string;
}
