import {Component, Input} from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})

export class GoogleMapComponent {
  @Input() lat: number;
  @Input() lng: number;
  @Input() cityName: string;
}
