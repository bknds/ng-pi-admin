import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { TabMenuModel } from '../../models/tabs-model';

@Component({
  selector: 'tabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class TabsetComponent implements OnInit {

  @Input()
  id: string;

  @Input()
  theme: string = 'default';

  tabsMenuItem: Array<TabMenuModel> = [];

  constructor(public _globalService: GlobalService) { }

  ngOnInit() {
    this._getTabMenu();

    this.theme = `tabs-wrap-${this.theme}`;
  }

  isActive(index) {
    this.tabsMenuItem.forEach(item => {
      item.active = false;
    });
    this.tabsMenuItem[index].active = true;

    /* send checked info */
    //this._globalService._tabsOrder([this.tabsMenuItem[index].for, this.tabsMenuItem[index].text]);

    let serviceArray = [this.tabsMenuItem[index].for, this.tabsMenuItem[index].text];
    this._globalService.dataBusChanged('tabsOrder', serviceArray);

  }

  _getTabMenu() {
    /* this._globalService.tabsMenu$.subscribe(tabsMenu => {
      if (tabsMenu.for === this.id)
        this.tabsMenuItem.push(tabsMenu);
    }, error => {
      console.log('Error:' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'tabsMenu' && data.value.for === this.id) {
        this.tabsMenuItem.push(data.value);
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }
}
