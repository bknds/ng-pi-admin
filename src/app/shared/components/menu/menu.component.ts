import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { collapse } from '../../animation/collapse-animate';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse],
  providers: []
})

export class MenuComponent {
  @Input() menuInfo: any;

  @Input() sidebarToggle;

  isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

}