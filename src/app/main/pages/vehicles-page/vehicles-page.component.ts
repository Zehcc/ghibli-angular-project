import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Vehicles } from '../../interfaces/vehicles.interface';

@Component({
  selector: 'app-vehicles-page',
  templateUrl: './vehicles-page.component.html',
  styleUrls: ['./vehicles-page.component.css']
})
export class VehiclesPageComponent implements OnInit {

  vehicles: Vehicles [] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<Vehicles []>('https://ghibliapi.herokuapp.com/vehicles')
    .subscribe((response)=> {
      this.vehicles = response;
      console.log(this.vehicles)
    })
  }

}
