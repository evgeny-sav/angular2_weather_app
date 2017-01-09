import {Component, Input, ChangeDetectionStrategy, OnInit} from "@angular/core";
import { WeatherData, City } from "../../shared";


@Component({
  selector: 'city-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./city-card.component.html'),
  styles: [require('./city-card.component.scss')]
})
export class CityCardComponent implements OnInit {
  @Input() cityWeather: WeatherData;
  @Input() search: string = '';
  isFav = false;
  isAdded = false;

  ngOnInit() {}

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
    console.log( JSON.parse(localStorage.getItem('favCities')))
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
    console.log( JSON.parse(localStorage.getItem('addedCities')))
  }
}
