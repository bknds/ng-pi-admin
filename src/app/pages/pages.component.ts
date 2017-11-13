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
  _isViewAll: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  breadcrumbItem = ['form', 'inputs', 'btn'];

  getPageInfo(info) {
    this.historyList.push(info);
  }

  isViewAll() {
    this._isViewAll = !this._isViewAll;
  }
}

