import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent implements OnInit {
  @Input()
  type: string;
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
    this.data = this.data.sort(this.sort(this.type.toString(), true));
  }

  asc() {
    this.sortType = 'asc';
    this.data = this.data.sort(this.sort(this.type.toString(), false));
  }

  sort(property, isDesc) {
    return function (a, b) {
      var value1 = a[property];
      var value2 = b[property];
      if (isDesc) {
        return value2 - value1;
      } else {
        return value1 - value2;
      }
    }
  }
}
