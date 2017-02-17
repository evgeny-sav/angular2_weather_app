import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { WeatherModule } from './weather/weather.module';
import { AppRoutesModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent }  from './';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutesModule,
    WeatherModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
