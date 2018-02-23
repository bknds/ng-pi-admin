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

    this._menuService.selectItem(this.menuInfo);/* ----->初始化判断路由isActive状态  未完成  待优化 */

    this._isSelectItem(this.menuInfo);
  }

  /* sidebar控制器 */
  _sidebarToggle() {
    this._globalService._sidebarToggleState(true);
    this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    });
  }

  /* 初始化 判断当前路由状态信息 控制菜单打开状态 */
  _isSelectItem(item) {
    for (let i in item) {
      if (item[i].children) {
        for (let index in item[i].children) {
          if (item[i].children[index].isActive) {
            item[i].toggle = 'on';
            break;
          } else {
            this._isSelectItem(item[i].children);
          }
        }
      }
    }
  }

}
