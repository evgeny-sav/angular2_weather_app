import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'google-map',
  template: `<sebm-google-map [latitude]="lat" [longitude]="lng"></sebm-google-map>`,
  styles: [require('./gmap.component.scss')]
})

export class GoogleMapComponent implements OnInit{
  lat: number;
  lng: number;

  ngOnInit() {
    this.lat = 52.42;
    this.lng = 30.92;
  }

}
