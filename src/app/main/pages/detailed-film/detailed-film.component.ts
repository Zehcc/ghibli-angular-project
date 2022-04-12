import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Films } from '../../interfaces/films.inferface';

@Component({
  selector: 'app-detailed-film',
  templateUrl: './detailed-film.component.html',
  styleUrls: ['./detailed-film.component.css']
})
export class DetailedFilmComponent implements OnInit {
  
  film!: Films;
  constructor(
    private activeRoute: ActivatedRoute,
    private http: HttpClient
    ) { }
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      const {id} = params;
      this.http.get<Films>(`https://ghibliapi.herokuapp.com/films/${id}`)
      .subscribe(response => {
        this.film = response;
      })
    })
  }
}
