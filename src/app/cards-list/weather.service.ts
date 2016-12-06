import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';

const LAT: number = 52.42;
const LNG: number = 30.92;
const NUM_OF_CITIES: number = 50;
const UNITS: string = 'metric';
const API_ID: string = '588d7bee278bdc312740873e9837c644';
const URL: string = `http://api.openweathermap.org/data/2.5/find?lat=${LAT}&lon=${LNG}&cnt=${NUM_OF_CITIES}&units=${UNITS}&APPID=${API_ID}`;
const MOCK_DATA_URL = './mock-data.json';

@Injectable()

export class WeatherService {

  constructor(private http: Http) {}

  getWeather(): Promise<WeatherData> {
    return this.http.get(URL)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(() => this.http.get(MOCK_DATA_URL)
        .toPromise()
        .then((res: Response) => res.json()));

  }

}

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

export class City {
  clouds: Clouds;
  coord: Coord;
  dt: number;
  id: number;
  main: Weather;
  name: string;
  sys: Sys;
  weather: Icon[];
  wind: Wind;

  constructor(
    clouds: Clouds,
    coord: Coord,
    dt: number,
    id: number,
    main: Weather,
    name: string,
    sys: Sys,
    weather: Icon[],
    wind: Wind
  ) {
    this.clouds = clouds;
    this.coord = coord;
    this.dt = dt;
    this.id = id;
    this.main = main;
    this.name = name;
    this.sys = sys;
    this.weather = weather;
    this.wind = wind;
  }
}

export class Clouds {
  all: number;

  constructor(
    all: number
  ) {
    this.all = all;
  }
}

export class Coord {
  lat: number;
  lon: number;

  constructor(
    lat: number,
    lon: number
  ) {
    this.lat = lat;
    this.lon = lon;
  }
}

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

export class Sys {
  country: string;

  constructor(country: string) {
    this.country = country;
  }
}

export class Icon {
  description: string;
  icon: string;
  id: number;
  main: string;

  constructor(
    description: string,
    icon: string,
    id: number,
    main: string
  ) {
    this.description = description;
    this.icon = icon;
    this.id = id;
    this.main = main;
  }
}

export class Wind {
  deg: number;
  speed: number;

  constructor(
    deg: number,
    speed: number
  ) {
    this.deg = deg;
    this.speed = speed;
  }
}
