import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app',
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')]
})

export class AppComponent implements OnInit{
  ngOnInit() {
    if (_.isNull(localStorage.getItem('favCities'))) {
      localStorage.setItem('favCities', JSON.stringify([]))
    }
  }
}
