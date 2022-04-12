import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Films } from '../../interfaces/films.inferface';

@Component({
  selector: 'app-films-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.css']
})
export class FilmsPageComponent implements OnInit {

  films: Films [] = [];

  constructor(private http:HttpClient) { }


  ngOnInit(): void {
    this.http.get<Films []>('https://ghibliapi.herokuapp.com/films')
    .subscribe((response)=> {
      this.films = response;
    })
    
  }

  




}
