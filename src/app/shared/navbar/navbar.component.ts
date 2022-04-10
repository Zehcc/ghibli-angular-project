import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private pagesServices: PagesService) { }

  ngOnInit(): void {
  }

  setPage(value: string) {
    this.pagesServices.setPage(value)
  }

}
