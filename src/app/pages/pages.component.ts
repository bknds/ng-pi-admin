import { Component, OnInit } from '@angular/core';
import { TransferService } from '../shared/services/transfer.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [TransferService]
})
export class PagesComponent implements OnInit {

  historyList;
  isViewAll: boolean = true;

  constructor(private _transferService: TransferService) { }

  ngOnInit() {
    this._transferService.damage$.subscribe(damage => {
      this.historyList = damage;
      console.log(this.historyList.routerLink);
    }, error => {
      console.log('Error: ' + error);
    });
  }

  breadcrumbItem = ['form', 'inputs', 'btn'];

  _isViewAll() {
    this._transferService.isViewAll$.subscribe(isViewAll => {
      this.isViewAll = isViewAll;
    }, error => {
      console.log('Error: ' + error);
    });
    this.isViewAll = !this.isViewAll;
  }
}

