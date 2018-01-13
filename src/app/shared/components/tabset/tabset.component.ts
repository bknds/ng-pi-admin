import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { TabMenuModel } from '../../models/tabs-model';

@Component({
  selector: 'tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {

  tabsMenuItem: Array<TabMenuModel> = [];

  constructor(public _globalService: GlobalService) { }

  ngOnInit() {
    this._getTabMenu();
  }

  isActive(index) {
    this.tabsMenuItem.forEach(item => {
      item.active = false;
    });
    this.tabsMenuItem[index].active = true;
  }

  _getTabMenu() {
    this._globalService.tabsMenu$.subscribe(tabsMenu => {
      this.tabsMenuItem.push(tabsMenu);
    }, error => {
      console.log('Error: ' + error);
    });
  }
}