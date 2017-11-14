import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss'],
  providers: [GlobalService]
})
export class ContentTopComponent implements OnInit {
  historyList;
  
  breadcrumbItem = ['form', 'inputs', 'btn'];

  constructor(private _globalService: GlobalService) { }

  ngOnInit() {
    this._globalService.damage$.subscribe(damage => {
      this.historyList = damage;
      console.log(this.historyList.routerLink);
    }, error => {
      console.log('Error: ' + error);
    });
  }

}
