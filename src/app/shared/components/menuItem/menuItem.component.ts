import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { menuService } from "../../services/menu.service";

@Component({
  selector: 'du-menu-item',
  templateUrl: './menuItem.component.html',
  styleUrls: ['./menuItem.component.scss'],
  providers: [menuService]
})
export class MenuItemComponent implements OnInit {
  protected menuInfo = [];

  @Output() menuItem = new EventEmitter<any>();

  constructor(private router: Router,
    private _menuService: menuService) {
  }

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();
  }

  getPageInfo(info) {
    this.menuItem.emit(info);
  }
}
