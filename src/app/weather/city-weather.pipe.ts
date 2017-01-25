import { Pipe, PipeTransform } from '@angular/core';
import {City} from '../shared';

@Pipe({
  name: 'cityWeatherPipe',
  pure: false
})
export class CityWeatherPipe implements PipeTransform {
  transform(cities: City[], value: string = ''): City[] {
    let searchedCyties: City[] = [];
    let pattern = new RegExp( '' + value.trim() + '' ,'i');
    if (cities == null) {
      return null;
    }
    cities.filter((city: City) => {
      if (pattern.test(city.name)) {
        searchedCyties.push(city)
      }
    });
    return searchedCyties;
  }
}
