import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
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
