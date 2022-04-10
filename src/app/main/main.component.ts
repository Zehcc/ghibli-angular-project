import { Component, OnInit } from '@angular/core';
import { PagesService } from '../services/pages.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  get page(){
    return this.pagesServices.page;
  }
  constructor(private pagesServices: PagesService) { }

  ngOnInit(): void {
  }

}
