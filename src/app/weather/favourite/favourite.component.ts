import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Component({
  selector: 'favourite',
  template: require('./favourite.component.html'),
  providers: [
    LoggerService
  ]
})
export class FavouriteComponent implements OnInit {

  constructor(private loggerService: LoggerService) {
  }

  ngOnInit() {
    this.loggerService.log('Hello World!!!');
  }
}
