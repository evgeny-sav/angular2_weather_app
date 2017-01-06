import {Component} from "@angular/core";

@Component({
  selector: 'header',
  template: require('./header.component.html'),
})

export class HeaderComponent {

  favourite: boolean = true;
  list: boolean = false;
  search: boolean = false;
  settings: boolean = false;

  search_state() {
    this.search = true;

    this.favourite= false;
    this.list= false;
    this.settings= false;
  }
  favourite_state() {
    this.favourite= true;

    this.search = false;
    this.list= false;
    this.settings= false;

  }
  list_state() {
    this.list= true;

    this.search = false;
    this.favourite= false;
    this.settings= false;

  }
  settings_state() {
    this.settings= true;

    this.search = false;
    this.favourite= false;
    this.list= false;

  }

}
