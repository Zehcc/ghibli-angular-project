import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.css']
})
export class LocationsPageComponent implements OnInit {

  locations: any [] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://ghibliapi.herokuapp.com/locations')
    .subscribe((response:any)=> {
      this.locations = response;
      console.log(this.locations)
    })
  }

}
