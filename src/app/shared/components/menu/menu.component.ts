import { Component, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';
import { menuService } from '../../services/menu.service';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse]
})
export class MenuComponent {
  @Input() menuInfo: any;
  @Input() sidebarToggle;

  constructor(private _menuService: menuService) { }

  isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  _selectItem() {
    this._menuService.selectItem(this._menuService.putSidebarJson());
  }
}