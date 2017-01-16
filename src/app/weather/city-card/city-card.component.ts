import {Component, Input, ChangeDetectionStrategy, OnInit} from "@angular/core";
import { City } from "../../shared";
import * as _ from 'lodash';


@Component({
  selector: 'city-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./city-card.component.html'),
  styles: [require('./city-card.component.scss')]
})
export class CityCardComponent implements OnInit {
  @Input() cityWeather: City;
  @Input() search: string = '';
  @Input() temperature: string;
  isFav = false;
  isAdded = false;
  Math:Math = Math;
  K:boolean = false;
  C:boolean = false;
  F:boolean = false;


  ngOnInit() {
    //console.log(this.cityWeather)
    switch (this.temperature) {
      case 'k': this.K = true;
      break;
      case 'c': this.C = true;
      break;
      case'f': this.F = true;
      break;
      default: this.C = true;
    }

    let favCities: City[] = JSON.parse(localStorage.getItem('favCities'));
    let addedCities: City[] = JSON.parse(localStorage.getItem('addedCities'));


    _.each(favCities, (city: City) => {
      if (city.id === this.cityWeather.id) {
        this.isFav = true;
      }
    });
    _.each(addedCities, (city: City) => {
      if (city.id === this.cityWeather.id) {
        this.isAdded = true;
      }
    })
  }

  toggleFav(event: Event,city: City) {
    event.preventDefault();
    this.isFav = !this.isFav;

    let favCities: City[] = JSON.parse(localStorage.getItem('favCities'));

    if (this.isFav) {
      favCities = [];
      favCities.push(city);

      localStorage.setItem('favCities' , JSON.stringify(favCities));
    } else {
      favCities.map((c: City, i: number) => {
        if (c.id == city.id) {
          favCities.splice(i, 1);
          localStorage.setItem('favCities' , JSON.stringify(favCities));
        }
      })
    }
  }
  toggleAdded(event: Event,city: City) {
    event.preventDefault();
    this.isAdded = !this.isAdded;

    let addedCities: City[] = JSON.parse(localStorage.getItem('addedCities'));

    if (this.isAdded) {
      let includes = addedCities.find((c: City) => {
        if (c.id == city.id) {
          return true;
        }
      });

      if (!includes) {
        addedCities.push(city)
      }
      localStorage.setItem('addedCities' , JSON.stringify(addedCities));
    } else {
      addedCities.map((c: City, i: number) => {
        if (c.id == city.id) {
          addedCities.splice(i, 1);
          localStorage.setItem('addedCities' , JSON.stringify(addedCities));
        }
      })
    }
  }
}
