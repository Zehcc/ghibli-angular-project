import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  page: string = 'home';
  constructor() { }

  setPage(value: string) {
    this.page = value;
  }
}
