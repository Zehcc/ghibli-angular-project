import { Component, Input, OnInit } from '@angular/core';
import { People } from '../../interfaces/people.interface';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: []
})
export class PersonComponent {
  
  @Input() person!: People;
  constructor() { }

}
