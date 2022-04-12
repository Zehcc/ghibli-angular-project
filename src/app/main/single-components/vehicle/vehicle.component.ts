import { Component, Input, OnInit } from '@angular/core';
import { Vehicles } from '../../interfaces/vehicles.interface';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input() vehicle!: Vehicles;
  constructor() { }

  ngOnInit(): void {
  }

}
