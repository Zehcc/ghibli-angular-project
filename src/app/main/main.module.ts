import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsPageComponent } from './pages/films-page/films-page.component';
import { PeoplePageComponent } from './pages/people-page/people-page.component';
import { LocationsPageComponent } from './pages/locations-page/locations-page.component';
import { VehiclesPageComponent } from './pages/vehicles-page/vehicles-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FilmComponent } from './single-components/film/film.component';
import { PersonComponent } from './single-components/person/person.component';
import { AppRoutingModule } from '../app-routing.module';
import { DetailedFilmComponent } from './pages/detailed-film/detailed-film.component';



@NgModule({
  declarations: [
    FilmsPageComponent, 
    PeoplePageComponent, 
    LocationsPageComponent, 
    VehiclesPageComponent, 
    HomePageComponent, 
    FilmComponent, 
    PersonComponent, 
    DetailedFilmComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ], 
  exports: [
    AppRoutingModule
  ]
})
export class MainModule { }
