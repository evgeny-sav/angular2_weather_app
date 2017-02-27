import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styles: ['.h3 { margin: 0;}'],
  providers: [
    LoggerService
  ]
})
export class FavouriteComponent implements OnInit {

  constructor(private loggerService: LoggerService) {
  }

  ngOnInit() {
    this.loggerService.log('Favourite component');
  }
}
