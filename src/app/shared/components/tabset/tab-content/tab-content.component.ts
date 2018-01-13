import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../services/global.service';
import { TabMenuModel } from '../../../models/tabs-model';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {
  @Input()
  tabTitle: string = 'tab title';

  @Input()
  active: boolean = false;

  @Input()
  disabled: boolean = false;

  tabsMenu: TabMenuModel;

  constructor(public _globalService: GlobalService) { }

  ngOnInit() {
    this._tabsTitle();
  }

  _tabsTitle() {
    this.tabsMenu = {
      text: this.tabTitle,
      active: this.active,
      disabled: this.disabled
    }
    this._globalService._tabsMenu(this.tabsMenu);
  }
}
