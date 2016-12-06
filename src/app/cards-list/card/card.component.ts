import { Component, Input } from '@angular/core';
import { City } from '../weather.service';

@Component({
  selector: 'card',
  template: require('./card.component.html'),
  styles: [require('./card.scss')],
})

export class CardComponent {
  @Input() city: City;
}
