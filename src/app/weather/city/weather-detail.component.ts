import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Subscription} from "rxjs";
import { WeatherService } from "../weather.service";
import { City } from "../../shared/city.model";

@Component({
  selector: 'city',
  templateUrl: 'weather-detail.component.html'
})

export class WeatherDetailComponent implements OnInit {

  id: number;
  city: City[] = [];
  private subscription: Subscription;

  constructor(private route: ActivatedRoute, private weatherService: WeatherService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.getCityData(this.id);
    });
  }
  getCityData(id:number) {
    this.weatherService.getCityWeatherByID(id)
      .then(res => this.city.push(res))
  }
}
