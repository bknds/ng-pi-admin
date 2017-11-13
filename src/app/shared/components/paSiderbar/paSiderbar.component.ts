import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { menuService } from "../../services/menu.service";

@Component({
  selector: 'pa-siderbar',
  templateUrl: './paSiderbar.component.html',
  styleUrls: ['./paSiderbar.component.scss'],
  providers: [menuService]
})
export class PaSiderbarComponent implements OnInit {
  protected menuInfo = [];

  @Input() isViewAll: boolean;

  //@Output() menuItem = new EventEmitter<any>();

  constructor(private router: Router,
    private _menuService: menuService) {
  }

  ngOnInit() {
    this.menuInfo = this._menuService.putSidebarJson();
  }

  _isViewAll() {
    this.isViewAll = true;
  }

}
