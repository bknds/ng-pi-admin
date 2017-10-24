import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { sidebarService } from "./sidebar.service";

@Component({
  selector: 'com-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [sidebarService]
})
export class MenuComponent implements OnInit {
  protected menuItem = [];

  constructor(private router: Router,
    private sidebarService: sidebarService) {
  }
  
  ngOnInit() {
    this.menuItem = this.sidebarService.putSidebarJson();
  }

}
