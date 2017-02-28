import { Injectable } from '@angular/core';
import { Http, Response, RequestMethod, URLSearchParams, Headers, Request, RequestOptions } from '@angular/http';
import { WeatherData, City } from '../shared';

const LAT: number = 52.42;
const LNG: number = 30.92;
const NUM_OF_CITIES: number = 50;
const UNITS: string = 'metric';
const API_ID: string = 'e24c10e3dcc3a36c20648021cb566b82';
const URL: string = 'http://api.openweathermap.org/data/2.5/';
const MOCK_DATA_URL = './mock-data.json';

@Injectable()
export class WeatherService {
  weatherIn: string = 'metric';

  constructor(private http: Http) {}

  getWeatherIn() {
    return this.weatherIn;
  }

  setWeatherIn(deg:string) {
    this.weatherIn = deg;
  }

  getWeather(): Promise<WeatherData> {
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    let params = new URLSearchParams();
    params.append('lat', LAT.toString());
    params.append('lon', LNG.toString());
    params.append('cnt', NUM_OF_CITIES.toString());
    params.append('units', UNITS);
    params.append('appid', API_ID);

    let reqOpts = new RequestOptions({
      url: URL + 'find',
      method: RequestMethod.Get,
      search: params,
      headers: headers
    });

    let request = new Request(reqOpts);

    return this.http.request(request)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(() => this.http.get(MOCK_DATA_URL)
        .toPromise()
        .then((res: Response) => res.json()));

  }


  getCityWeather(cityName: string): Promise<City> {
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    let params = new URLSearchParams();
    params.append('q', cityName);
    params.append('units', UNITS);
    params.append('appid', API_ID);

    let reqOpts = new RequestOptions({
      url: URL + 'weather',
      method: RequestMethod.Get,
      search: params,
      headers: headers
    });

    let request = new Request(reqOpts);

    return this.http.request(request)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(() => this.http.get(MOCK_DATA_URL)
        .toPromise()
        .then((res: Response) => res.json()));
  }

  getCityWeatherByID(id:number): Promise<City> {
    let headers = new Headers();
    headers.append('Accept', 'application/json');

    let params = new URLSearchParams();
    params.append('id', id.toString());
    params.append('units', UNITS);
    params.append('appid', API_ID);

    let reqOpts = new RequestOptions({
      url: URL + 'weather',
      method: RequestMethod.Get,
      search: params,
      headers: headers
    });

    let request = new Request(reqOpts);

    return this.http.request(request)
      .toPromise()
      .then((res: Response) => res.json())
      .catch(() => this.http.get(MOCK_DATA_URL)
        .toPromise()
        .then((res: Response) => res.json()));
  }

}
