import  { Component } from '@angular/core';

@Component({
  selector: 'city-search-bar',
  template: require('./city-search-bar.component.html')
})
export class CitySearchBarComponent {
  search: string;

  constructor() {
    this.search = '';
  }

  filterCities(event: Event, value: string = '') {
    event.preventDefault();
    this.search = value;
  }
  resetInput() {
    this.search = '';
  }
}
