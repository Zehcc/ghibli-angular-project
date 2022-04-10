import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.css']
})
export class VehiclesPageComponent implements OnInit {

  vehicles: any [] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://ghibliapi.herokuapp.com/vehicles')
    .subscribe((response:any)=> {
      this.vehicles = response;
      console.log(this.vehicles)
    })
  }

}
