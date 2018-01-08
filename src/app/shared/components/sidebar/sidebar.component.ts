import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { menuService } from "../../services/menu.service";
import { GlobalService } from '../../services/global.service';
import { collapse } from '../../animation/collapse-animate';

@Component({
  selector: 'du-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [collapse],
  providers: [menuService]
})

export class SidebarComponent implements OnInit {

  isMsgCenterOn:string = 'off';

  protected menuInfo = [];

  isViewAll: boolean = true;

  tip = new Tips;
  constructor(private _menuService: menuService,
    public _globalService: GlobalService) {
  }

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();
    this._isViewAll();
    this.tip.ring = true;
    this.tip.comments = true;
    this.tip.email = true;
  }

  _isViewAll() {
    this._globalService.isViewAll$.subscribe(isViewAll => {
      this.isViewAll = isViewAll;
    }, error => {
      console.log('Error: ' + error);
    });

    this._globalService._isViewAllState(true);
  }

  isMsgCenterToggleOn() {
    this.isMsgCenterOn === 'on' ? this.isMsgCenterOn = 'off' : this.isMsgCenterOn = 'on';
  }
}

export class Tips {
  ring: boolean;
  comments: boolean;
  email: boolean;
}