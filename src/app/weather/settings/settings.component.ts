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
  fiveOperators: string;
  flat: string;
  multithread: string;
  sched: string;
  timeAfter: number;
  timeBefore: number;
  timeDone: number;

  src = new Rx.BehaviorSubject(this.num);



  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.temperature = this.weatherService.getWeatherIn();
    this.setTemp(this.temperature);

    let src2 = Rx.Observable
      .interval(100)
      .take(20)
      .filter(x => x%2 !== 0)
      .map(x => 'Number: ' + x)
      .delay(3000);

    let src3 = Rx.Observable.interval(1000)
      .take(5)
      .flatMap((x) => {
        return Rx.Observable.interval(100)
          .take(3)
          .map((y) => x + ' : ' + y)
      });

    let src4 = Rx.Observable
      .interval(800)
      .take(4)
      .map(x => 'Source 1: ' + x);

    let src5 = Rx.Observable
      .interval(550)
      .take(4)
      .map(x => 'Source 2: ' + x);

    let src6 = Rx.Observable
      .interval(1000)
      .take(10)
      .observeOn(Rx.Scheduler.async);

    this.src.subscribe( x => this.num = x);
    src2.subscribe(x => this.fiveOperators = x);
    src3.subscribe(x => this.flat = x);
    Rx.Observable.merge(src4, src5).subscribe( x => this.multithread = x);

    this.timeBefore = Date.now();
    src6.subscribe({
      next: x => this.sched = x + '',
      error: err => console.error('something wrong occurred: ' + err),
      complete: () => {
        this.timeDone = Date.now();
        this.sched ='Done'
      }
    });
    this.timeAfter = Date.now();
  }

  addOne() {
    this.src.next(this.num += 1);
  }

  setTemp(temp: string) {
    this.weatherService.setWeatherIn(temp);
    this.toggleTemp(temp);
  }

  toggleTemp(temp: string) {
    switch(temp) {
      case 'metric':
        this.tempCelsius = true;
        this.tempKelvin = false;
        this.tempFahrenheit = false;
        break;
      case 'default':
        this.tempCelsius = false;
        this.tempKelvin = true;
        this.tempFahrenheit = false;
        break;
      case 'imperial':
        this.tempCelsius = false;
        this.tempKelvin = false;
        this.tempFahrenheit = true;
        break;
      default:
        this.tempCelsius = true;
        this.tempKelvin = false;
        this.tempFahrenheit = false;
        break;
    }
  }
}
