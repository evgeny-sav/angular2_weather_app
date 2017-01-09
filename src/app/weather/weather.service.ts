import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { WeatherData, City } from '../shared';

const LAT: number = 52.42;
const LNG: number = 30.92;
const NUM_OF_CITIES: number = 50;
const UNITS: string = 'metric';
const API_ID: string = 'e24c10e3dcc3a36c20648021cb566b82';
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
  getCityWeather(cityName: string): Promise<City> {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${UNITS}&APPID=${API_ID}`)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(() => this.http.get(MOCK_DATA_URL)
        .toPromise()
        .then((res: Response) => res.json()));
  }

}
