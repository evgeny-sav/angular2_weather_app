import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'google-map',
  template: require('./google-map.component.html'),
  styles: [require('./google-map.component.scss')]
})

export class GoogleMapComponent implements OnInit{
  lat: number;
  lng: number;

  ngOnInit() {
    this.lat = 52.42;
    this.lng = 30.92;
  }

}
