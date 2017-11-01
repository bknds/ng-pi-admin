import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'du-historyPage',
  templateUrl: './historyPage.component.html',
  styleUrls: ['./historyPage.component.scss']
})
export class HistoryPageComponent implements OnInit {

  @Input() historyItem: any;

  historyList: Array<any>;
  constructor() { }

  ngOnInit() {
    this.getHistoryData();
    console.log(this.historyList);
  }

  getHistoryData() {
    for(let item of this.historyItem) {
      let _history = new History;
      _history.title = item.title;
      if (item.routerLink) {
        _history.routerLink = item.routerLink;
      };
      this.historyList.push(_history);
      this.historyList.push(new Set(this.historyList));
    };
  }
}

export class History {
  routerLink:string;
  title:string;
}