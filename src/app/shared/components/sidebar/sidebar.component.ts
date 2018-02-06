import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { menuService } from "../../services/menu.service";
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [menuService]
})
export class SidebarComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/avatar.png';
  public menuInfo: Array<any> = [];
  public sidebarToggle: boolean = true;

  constructor(private _menuService: menuService,
    public _globalService: GlobalService) { }

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();
    this._sidebarToggle();
  }

  _sidebarToggle() {
    this._globalService._sidebarToggleState(true);
    this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    });
  }
}
