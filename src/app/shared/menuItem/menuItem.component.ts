import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { sidebarService } from "./sidebar.service";

@Component({
  selector: 'du-menu-item',
  templateUrl: './menuItem.component.html',
  styleUrls: ['./menuItem.component.scss'],
  providers: [sidebarService]
})
export class MenuItemComponent implements OnInit {
  protected menuInfo = [];

  constructor(private router: Router,
    private sidebarService: sidebarService) {
  }
  
  ngOnInit() {
    this.menuInfo = this.sidebarService.putSidebarJson();
  }

}
