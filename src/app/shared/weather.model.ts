export class Weather {
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;

  constructor(
    humidity: number,
    pressure: number,
    temp: number,
    temp_max: number,
    temp_min: number
  ) {
    this.humidity = humidity;
    this.pressure = pressure;
    this.temp = temp;
    this.temp_max = temp_max;
    this.temp_min = temp_min;
  }
}
