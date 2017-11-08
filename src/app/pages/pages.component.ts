import { Component, OnInit } from '@angular/core';
import { simAnim } from '../shared/animation/sim-anim';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  animations: [simAnim]
})
export class PagesComponent implements OnInit {

  historyList = [];

  constructor() { }

  ngOnInit() {
  }

  breadcrumbItem = ['form', 'inputs', 'btn'];

  getPageInfo(info) {
    this.historyList.push(info);
  }
}

