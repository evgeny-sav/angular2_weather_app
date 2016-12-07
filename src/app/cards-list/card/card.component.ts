import { Component, Input } from '@angular/core';
import { City } from '../../shared';

@Component({
  selector: 'card',
  template: require('./card.component.html'),
  styles: [require('./card.component.scss')],
})

export class CardComponent {
  @Input() city: City;
}
