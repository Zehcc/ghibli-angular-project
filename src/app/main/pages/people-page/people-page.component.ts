import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { People } from '../../interfaces/people.interface';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

  people: People [] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get<People []>('https://ghibliapi.herokuapp.com/people')
    .subscribe((response)=> {
      this.people = response;
    })
  }

}
