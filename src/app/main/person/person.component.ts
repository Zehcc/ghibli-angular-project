import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: []
})
export class PersonComponent implements OnInit {
  @Input() person: any;
  constructor() { }

  ngOnInit(): void {
  }

}
