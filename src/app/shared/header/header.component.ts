import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pagesServices: PagesService) { }

  ngOnInit(): void {
  }
  setPage(value: string) {
    this.pagesServices.setPage(value)
  }

}
