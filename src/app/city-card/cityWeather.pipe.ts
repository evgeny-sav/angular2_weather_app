import {Pipe, PipeTransform} from '@angular/core';
import { City } from '../shared';

@Pipe({name: 'cityWeather'})
export class CityWeatherPipe implements PipeTransform {
  transform(weatherData: City[], cityName: string): void {
    // let pattern = new RegExp('' + cityName + '', 'i');
    // let cities = weatherData.filter((city: City) => pattern.test(city.name));
    // return cities;
    console.log(cityName)
  }
}
