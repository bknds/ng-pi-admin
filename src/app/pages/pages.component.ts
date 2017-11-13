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

  constructor(private _transferService: TransferService) {
    this._transferService.damage$.subscribe(damage => {
      console.log(damage);
      
      this.historyList.push(damage);
      console.log(this.historyList);
    }, error => {
      console.log('error: ' + error);
    });
  }

  ngOnInit() { }

  breadcrumbItem = ['form', 'inputs', 'btn'];

  _isViewAll() {
    this.isViewAll = !this.isViewAll;
  }
}

