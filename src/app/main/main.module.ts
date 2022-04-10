import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FilmsPageComponent } from './films-page/films-page.component';
import { PeoplePageComponent } from './people-page/people-page.component';
import { LocationsPageComponent } from './locations-page/locations-page.component';
import { VehiclesPageComponent } from './vehicles-page/vehicles-page.component';
import { HomePageComponent } from './home-page/home-page.component';



@NgModule({
  declarations: [MainComponent, FilmsPageComponent, PeoplePageComponent, LocationsPageComponent, VehiclesPageComponent, HomePageComponent],
  imports: [
    CommonModule
  ], 
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
