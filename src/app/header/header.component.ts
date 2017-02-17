import {Component} from "@angular/core";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {

  state: Object = {
    favourite: true,
    list: false,
    search: false,
    settings: false
  };

  search_state() {
    this.state = new Object({
      search: true,
      favourite: false,
      list: false,
      settings: false
    })
  }
  favourite_state() {
    this.state = new Object({
      favourite: true,
      settings: false,
      search: false,
      list: false
    })

  }
  list_state() {
    this.state = new Object({
      list: true,
      settings: false,
      search: false,
      favourite: false
    })

  }
  settings_state() {
    this.state = new Object({
      settings: true,
      search: false,
      favourite: false,
      list: false
    })
  }

}
