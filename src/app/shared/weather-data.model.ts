import { City } from '../shared/';

export class WeatherData {
  cod: string;
  count: number;
  list: City[];
  message: string;

  constructor(
    cod: string,
    count: number,
    list: City[],
    message: string
  ) {
    this.cod = cod;
    this.count = count;
    this.list = list;
    this.message = message;
  }
}
