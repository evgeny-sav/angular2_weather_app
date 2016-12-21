import {Component} from "@angular/core";

@Component({
  selector: 'city-search-bar',
  template: require('./city-search-bar.component.html')
})
export class CitySearchBarComponent {

  constructor() {}

  //TODO: get value from <input> and somehow send it to Card Component to render filtered City[]

}
