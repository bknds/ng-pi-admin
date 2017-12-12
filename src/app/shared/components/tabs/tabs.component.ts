import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'du-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  tabsItem = [
    { text: 'ITEM1', isActive: true },
    { text: 'ITEM2', isActive: false },
    { text: 'ITEM3', isActive: false }
  ];

  constructor() { }

  ngOnInit() { }

  isActive(index) {
    this.tabsItem.forEach(item => {
      item.isActive = false;
    });
    this.tabsItem[index].isActive = true;
  }
}
