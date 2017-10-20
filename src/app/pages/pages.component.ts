import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  handle(time: number): void {
    // [time] is string
    // date style follow format props
    console.log(time)}

}


