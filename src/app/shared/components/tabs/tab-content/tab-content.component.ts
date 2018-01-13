import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../../services/global.service';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss'],
  providers: []
})
export class TabContentComponent implements OnInit {

  @Input()
  isContentActive: boolean = false;
  @Input()
  tabsTitle: string = 'tabsTitle';

  constructor(public _globalService: GlobalService) { }

  ngOnInit() {
    this._tabsTitle(this.tabsTitle);
  }

  _tabsTitle(tabsTitle: string) {
    this._globalService._tabsTitle(tabsTitle);
  }
}
