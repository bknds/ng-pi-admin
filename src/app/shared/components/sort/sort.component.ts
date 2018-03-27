import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Input()
  key: string;
  @Input()
  data: Array<any>;

  normalData: Array<any>;
  sortType: string = 'normal';
  constructor() { }
  ngOnInit() {
    this.sortType = 'normal';
  }

  desc() {
    this.sortType = 'desc';
    this.data = this.data.sort(this.sort(this.key.toString(), true));
  }

  asc() {
    this.sortType = 'asc';
    this.data = this.data.sort(this.sort(this.key.toString(), false));
  }

  sort(property, isDesc) {
    return function (a, b) {
      const value1 = a[property];
      const value2 = b[property];
      if (isDesc) {
        return value2 - value1;
      } else {
        return value1 - value2;
      }
    };
  }
}
