import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { WeatherData, City } from "../../shared";


@Component({
  selector: 'city-card',
  //changeDetection: ChangeDetectionStrategy.OnPush,
  template: require('./city-card.component.html'),
  styles: [require('./city-card.component.scss')]
})
export class CityCardComponent {
  @Input() cityWeather: WeatherData;
  @Input() search: string = '';
  isFav = false;

  toggleFav(event: Event,city: City) {
    this.isFav = !this.isFav;

    let favCities: City[] = JSON.parse(localStorage.getItem('favCities'));

    if (this.isFav) {
      let includes = favCities.find((c: City) => {
        if (c.id == city.id) {
          return true;
        }
      });

      if (!includes) {
        favCities.push(city)
      }
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
}
