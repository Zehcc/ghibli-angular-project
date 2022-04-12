import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.css']
})
export class PeoplePageComponent implements OnInit {

  people: any [] = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://ghibliapi.herokuapp.com/people')
    .subscribe((response:any)=> {
      this.people = response;
      console.log(this.people)
    })
  }

}
