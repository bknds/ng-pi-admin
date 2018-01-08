import { Component, OnInit } from '@angular/core';
import { TablesService } from '../../../../shared/services/tables.service';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss'],
  providers: [TablesService]
})
export class BasicTablesComponent implements OnInit {

  default_data: Array<any>;
  isCheckedAll: boolean = false;

  constructor(private _tablesService: TablesService) { }

  ngOnInit() {
    this.default_data = this._tablesService.DEFAULT_DATA;

    /* 根据数组内对象指定属性排序 */
    function compare(property) {
      return function (a, b) {
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
      }
    }
    this.default_data = this.default_data.sort(compare('price'));
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
      for (let a in this.default_data) {
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
