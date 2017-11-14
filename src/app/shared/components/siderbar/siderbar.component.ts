import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { menuService } from "../../services/menu.service";
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'du-siderbar',
  templateUrl: './siderbar.component.html',
  styleUrls: ['./siderbar.component.scss'],
  providers: [menuService]
})

export class SiderbarComponent implements OnInit {
  protected menuInfo = [];

  isViewAll: boolean = true;

  constructor(private _menuService: menuService,
    public _globalService: GlobalService) {
  }

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();

    this._globalService.isViewAll$.subscribe(isViewAll => {
      this.isViewAll = isViewAll;
    }, error => {
      console.log('Error: ' + error);
    });
  }

  _isViewAll() {
    this.isViewAll = true;
    this._globalService._isViewAllState(this.isViewAll);
  }

}
