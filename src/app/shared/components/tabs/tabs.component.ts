import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'du-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  providers: [GlobalService]
})
export class TabsComponent implements OnInit {

  tabsMenuItem: Array<TabMenu> = [];

  constructor(public _globalService: GlobalService) { }

  ngOnInit() {
    this._getTabMenu();
  }

  isActive(index) {
    this.tabsMenuItem.forEach(item => {
      item.isActive = false;
    });
    this.tabsMenuItem[index].isActive = true;
  }

  _getTabMenu() {
    this._globalService.tabsTitle$.subscribe(tabsTitle => {
      let tabMenu = new TabMenu;
      tabMenu.text = tabsTitle;
      tabMenu.isActive = false;
      this.tabsMenuItem.push(tabMenu);
      this.isActive(0);
    }, error => {
      console.log('Error: ' + error);
    });
  }
}

export class TabMenu {
  text: string;
  isActive: boolean;
}