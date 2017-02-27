import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { FavouriteComponent, ListComponent, SearchComponent, SettingsComponent, CityComponent } from './weather';
import { PageNotFoundComponent } from './pagenotfound';

export const appRoutes: Routes = [
  { path: '', component: FavouriteComponent },
  { path: 'city/:id', component: CityComponent },
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

