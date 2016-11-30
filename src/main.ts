// Polyfills
import 'core-js/client/shim.min.js';
import 'reflect-metadata/Reflect.js';
import 'core-js/es6/';
import 'zone.js/dist/zone';
// Vendor
// Angular 2
import '@angular/platform-browser';
import '@angular/platform-browser-dynamic';
import '@angular/core';
import '@angular/common';
import '@angular/forms';
import '@angular/http';
import '@angular/router';
// RxJS
import 'rxjs';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import  { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
