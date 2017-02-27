import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FavouriteComponent, ListComponent, SearchComponent, SettingsComponent, WeatherDetailComponent, CityComponent } from './weather';
import { PageNotFoundComponent } from './pagenotfound';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/favourite', pathMatch: 'full'},
  { path: 'favourite', component: FavouriteComponent },
  { path: 'city', component: CityComponent,
    children: [
      { path: ':id', component: WeatherDetailComponent }
    ]
  },
  { path: 'list', component: ListComponent },
  { path: 'search', component: SearchComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {}

