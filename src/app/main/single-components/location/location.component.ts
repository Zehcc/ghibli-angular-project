import { Component, Input } from '@angular/core';
import { Locations } from '../../interfaces/locations.interface';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent {
  @Input() location!: Locations;
  constructor() { }

}
