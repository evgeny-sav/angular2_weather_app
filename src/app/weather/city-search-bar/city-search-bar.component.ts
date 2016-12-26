import  { Component } from "@angular/core";

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
    // this.searchedCyties = [];
    // let pattern = new RegExp(value,'i');
    // this.weatherData.filter((city: City) => {
    //   if (pattern.test(city.name)) {
    //     this.searchedCyties.push(city);
    //   }
    // })
    this.search = value;
  }

}
