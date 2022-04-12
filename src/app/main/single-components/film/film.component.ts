import { Component, Input } from '@angular/core';
import { Films } from '../../interfaces/films.inferface';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {

  @Input() film!: Films;
  constructor() { }

}
