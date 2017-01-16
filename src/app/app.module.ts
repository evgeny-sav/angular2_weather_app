import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { WeatherComponent, CityCardComponent, GoogleMapComponent, HeaderComponent, FooterComponent, CitySearchBarComponent, SearchComponent, ListComponent, SettingsComponent, FavouriteComponent }  from './';
import { CityWeatherPipe } from "./weather/cityWeather.pipe";
import { FromStoragePipe } from "./weather/fromStorage.pipe";

import { TestComponent } from './test/test.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';


const appRoutes: Routes = [
  { path: '', component: FavouriteComponent },
  { path: 'list', component: ListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent }
];




@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
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
    FromStoragePipe,
    SearchComponent,
    ListComponent,
    SettingsComponent,
    FavouriteComponent,

    TestComponent,
    PageNotFoundComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
