
import { Component, OnInit } from '@angular/core';
import { SmartTablesService } from './smart-tables.service';

@Component({
  selector: 'app-smart-tables',
  templateUrl: './smart-tables.component.html',
  styleUrls: ['./smart-tables.component.scss'],
  providers: [SmartTablesService]
})
export class SmartTablesComponent implements OnInit {
  table_data: Array<any>;

  /* pagination Info */
  pageSize = 10;
  pageNumber = 1;

  constructor(private _smartTablesService: SmartTablesService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.table_data = this._smartTablesService.DATA;
  }

  pageChanged(pN: number): void {
    this.pageNumber = pN;
  }

}
