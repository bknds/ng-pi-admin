import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-tables',
  templateUrl: './basic-tables.component.html',
  styleUrls: ['./basic-tables.component.scss']
})
export class BasicTablesComponent implements OnInit {

  default_data: Array<any>;
  isCheckedAll: boolean = false;

  constructor() { }

  ngOnInit() {
    this.default_data = [
      { first_name: 'Steve', last_name: 'Jobs', user_name: '@steve' },
      { first_name: 'Simon', last_name: 'Philips', user_name: '@simon' },
      { first_name: 'Jane', last_name: 'Doe', user_name: '@jane' },
      { first_name: 'Larry', last_name: 'Thornton', user_name: '@larry' },
      { first_name: 'Hiver', last_name: 'Choe', user_name: '@hiver' },
    ];
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
