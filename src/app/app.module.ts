import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent, CardsListComponent, CardComponent, GoogleMapComponent }  from '../app/';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBkaXS2XRi4EaDJ99KpfZSpkm4RQt8-auY'})
  ],
  declarations: [
    AppComponent,
    CardsListComponent,
    CardComponent,
    GoogleMapComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
