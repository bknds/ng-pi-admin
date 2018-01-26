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

  public menuInfo = [];

  sidebarToggle: boolean = true;

  tip = new Tips;

  constructor(private _menuService: menuService,
    public _globalService: GlobalService) {
  }

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();
    console.log(this.menuInfo);
    
    this._sidebarToggle();
    this.tip.ring = true;
    this.tip.comments = true;
    this.tip.email = true;
  }

  _sidebarToggle() {
    this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    });

    this._globalService._sidebarToggleState(true);
  }

}

export class Tips {
  ring: boolean;
  comments: boolean;
  email: boolean;
}