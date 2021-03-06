import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { RouterModule } from '@angular/router';

import { WeatherService } from './weather.service';

import { CityCardComponent, WeatherDetailComponent, CityComponent, GoogleMapComponent, CitySearchBarComponent, SearchComponent, ListComponent, SettingsComponent, FavouriteComponent } from './';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';
import { CityWeatherPipe } from "./city-weather.pipe";
import { FromStoragePipe } from "./from-storage.pipe";
import { ConvertTemperaturePipe } from "./convert-temperature.pipe";
import { WeatherHighlightDirective } from './weather-highlight.directive';
import { WindDirectionDirective } from './wind-direction.directive';
import { SearchValidatorDirective } from './city-search-bar/search-validator.directive';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBkaXS2XRi4EaDJ99KpfZSpkm4RQt8-auY'}),
  ],
  declarations: [
    CitySearchBarComponent,
    SearchComponent,
    ListComponent,
    SettingsComponent,
    FavouriteComponent,
    PageNotFoundComponent,
    CityCardComponent,
    WeatherDetailComponent,
    CityComponent,
    GoogleMapComponent,
    CityWeatherPipe,
    FromStoragePipe,
    ConvertTemperaturePipe,
    WeatherHighlightDirective,
    WindDirectionDirective,
    SearchValidatorDirective
  ],
  providers: [
    WeatherService
  ],
  exports: [
    CitySearchBarComponent,
    SearchComponent,
    ListComponent,
    SettingsComponent,
    FavouriteComponent,
    PageNotFoundComponent,
    CityCardComponent,
    GoogleMapComponent
  ]
})

export class WeatherModule { }
