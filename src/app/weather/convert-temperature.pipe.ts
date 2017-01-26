import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertTemp',
  pure: false
})
export class ConvertTemperaturePipe implements PipeTransform {
  transform(t: number, v: string) {
    if (v === 'default') {
      return (t + 273)  + '°K';
    } else if (v === 'metric') {
      return t  + '°C';
    } else if (v === 'imperial') {
      return ((t * 1.8) + 32) + '°F';
    }
  }
}
