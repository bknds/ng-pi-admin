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
  constructor(private router: Router,
              private sidebarService: sidebarService) {
              }
  ngOnInit() {
    this.sidebarService;
  }

  userInfo() {
    this.router.navigate(['/pages/index']);
  }

  userInfo2() {
    this.router.navigate(['/pages/form/inputs']);
  }
}
