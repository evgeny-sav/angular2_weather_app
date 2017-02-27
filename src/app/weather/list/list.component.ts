import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styles: ['.h3 {margin: 0;}'],
  providers: [
    LoggerService
  ]
})
export class ListComponent implements OnInit {

  constructor(private loggerService: LoggerService) {
  }

  ngOnInit() {
    this.loggerService.log('List component');
  }
}
