import {Component, OnInit, Input} from "@angular/core";
import {template} from '../tpl/card.tpl';
import {City} from "../../services/weather.service";

@Component({
  selector: 'card',
  template: template
})

export class CardComponent implements OnInit {

  @Input() city: City;

  constructor(){}
  ngOnInit() {}
}
