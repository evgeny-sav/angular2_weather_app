import {Component, OnInit} from "@angular/core";
import { WeatherService } from '../weather.service';
import * as Rx from 'rxjs';

@Component({
  selector: 'settings',
  template: require('./settings.component.html'),
})
export class SettingsComponent implements OnInit{
  tempCelsius: boolean;
  tempKelvin: boolean;
  tempFahrenheit: boolean;
  temperature: string;

  output: HTMLElement = document.getElementById('output');
  btn: HTMLElement = document.getElementById('btn');
  num: number = 0;
  src = new Rx.BehaviorSubject(this.num);

  fiveOperators: string;
  src2 = Rx.Observable
  .interval(100)
  .take(20)
  .filter(x => x%2 !== 0)
  .map(x => 'Number: ' + x)
  .delay(3000);

  flat: string;
  src3 = Rx.Observable.interval(1000).take(5).flatMap((x) => Rx.Observable.interval(100).take(3).map((y)=> x + ' : ' + y));


  multithread: any;
  src4 = Rx.Observable.interval(800).take(4).map(x => 'Source 1: ' + x);
  src5 = Rx.Observable.interval(550).take(4).map(x => 'Source 2: ' + x);

  sched: string;
  beforeSched: string;
  afterSched: string;
  timeA: number;
  timeB: number;
  timeD: number;
  src6 = Rx.Observable.interval(1000).take(10).observeOn(Rx.Scheduler.async);


  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.temperature = this.weatherService.getWeatherIn();
    this.setTemp(this.temperature);

    this.src.subscribe( x => this.num = x);
    this.src2.subscribe(x => this.fiveOperators = x);
    this.src3.subscribe(x => this.flat = x);
    Rx.Observable.merge(this.src4, this.src5).subscribe( x => this.multithread = x);

    this.timeB = Date.now();
    this.beforeSched = 'Before SUBSCRIBE';
    this.src6.subscribe({
      next: x => this.sched = x + '',
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => { this.timeD = Date.now(); this.sched ='Done'}
    });
    this.timeA = Date.now();
    this.afterSched = 'After SUBSCRIBE';
  }

  addOne() {
    this.src.next(this.num += 1);
  }

  setTemp(temp: string) {
    this.weatherService.setWeatherIn(temp);
    this.toggleTemp(temp);
  }

  toggleTemp(temp: string) {
    if (temp === 'metric'){

      this.tempCelsius = true;
      this.tempKelvin = false;
      this.tempFahrenheit = false;

    } else if (temp === 'default') {

      this.tempCelsius = false;
      this.tempKelvin = true;
      this.tempFahrenheit = false;

    } else if (temp === 'imperial') {

      this.tempCelsius = false;
      this.tempKelvin = false;
      this.tempFahrenheit = true;

    }
  }
}
