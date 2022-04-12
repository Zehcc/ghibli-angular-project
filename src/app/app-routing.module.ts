import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsPageComponent } from './main/pages/films-page/films-page.component';
import { HomePageComponent } from './main/pages/home-page/home-page.component';
import { LocationsPageComponent } from './main/pages/locations-page/locations-page.component';
import { PeoplePageComponent } from './main/pages/people-page/people-page.component';
import { VehiclesPageComponent } from './main/pages/vehicles-page/vehicles-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'films',
    component: FilmsPageComponent
  },
  {
    path: 'people',
    component: PeoplePageComponent
  },
  {
    path: 'locations',
    component: LocationsPageComponent
  },
  {
    path: 'vehicles',
    component: VehiclesPageComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
