import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../../../shared/services/tables.service';

@Component({
  selector: 'app-default-tables',
  templateUrl: './default-tables.component.html',
  styleUrls: ['./default-tables.component.scss'],
  providers: [TablesService]
})
export class DefaultTablesComponent implements OnInit {

  default_data:Array<any>;
  isCheckedAll:boolean = false;

  constructor(private _tablesService: TablesService) { }

  ngOnInit() {
    this.default_data = this._tablesService.DEFAULT_DATA;
  }

  allChecked($event) {
    this.isCheckedAll = $event.checked;
    for (let i of this.default_data) {
      i.checked = $event.checked;
    }
  };

  Checked($event, index) {
    this.default_data[index].checked = $event.checked;
    if ($event.checked) {
      for (let a = 0; a < this.default_data.length; a++) {
        if (!this.default_data[a].checked) {
          this.isCheckedAll = false;
          break;
        } else {
          this.isCheckedAll = true;
        }
      }
    } else {
      this.isCheckedAll = false;
    }
  }
}
