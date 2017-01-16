import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { WeatherComponent, CityCardComponent, GoogleMapComponent, HeaderComponent, FooterComponent, CitySearchBarComponent }  from './';
import { CityWeatherPipe } from "./weather/cityWeather.pipe";
import { FromStoragePipe } from "./weather/fromStorage.pipe";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBkaXS2XRi4EaDJ99KpfZSpkm4RQt8-auY'})
  ],
  declarations: [
    AppComponent,
    CityCardComponent,
    GoogleMapComponent,
    HeaderComponent,
    FooterComponent,
    CitySearchBarComponent,
    WeatherComponent,
    CityWeatherPipe,
    FromStoragePipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
