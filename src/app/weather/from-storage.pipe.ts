import { Pipe, PipeTransform } from '@angular/core';
import {City} from '../shared';

@Pipe({
  name: 'fromStorage',
  pure: false
})
export class FromStoragePipe implements PipeTransform {
  transform(cities: City[], val: string) {
    let result: City[];
    if (val === 'fav') {
      result = JSON.parse(localStorage.getItem('favCities'));
    }
    if (val === 'list') {
      result = JSON.parse(localStorage.getItem('addedCities'));
    }

    return result;
  }
}
