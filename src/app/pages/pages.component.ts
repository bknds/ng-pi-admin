import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
})
export class PagesComponent implements OnInit {

  historyList = [];

  constructor() { }

  ngOnInit() {
  }

  breadcrumbItem = ['form', 'inputs', 'btn'];

  getPageInfo(info) {
    this.historyList.push(info);
    console.log(this.historyList);
  }
}

