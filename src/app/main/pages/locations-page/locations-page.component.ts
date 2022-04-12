import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Locations } from '../../interfaces/locations.interface';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.css']
})
export class LocationsPageComponent implements OnInit {

  locations: Locations [] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Locations []>('https://ghibliapi.herokuapp.com/locations')
    .subscribe((response)=> {
      this.locations = response;
      console.log(this.locations)
    })
  }

}
