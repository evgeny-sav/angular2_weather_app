import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app/component/app.component';
import { CardsListComponent } from "./cards-list/component/cards-list.component";
import { CardComponent } from "./card/component/card.component";
import { GoogleMapComponent } from "./gmap/component/gmap.component";
import { AgmCoreModule } from 'angular2-google-maps/core';
import { HttpModule } from "@angular/http";

@NgModule({
  imports:[ BrowserModule,
            HttpModule,
            AgmCoreModule.forRoot({apiKey: 'AIzaSyBkaXS2XRi4EaDJ99KpfZSpkm4RQt8-auY'})
  ],
  declarations: [ AppComponent, CardsListComponent, CardComponent, GoogleMapComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
