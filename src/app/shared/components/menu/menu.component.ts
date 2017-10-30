import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuInfo: any;

  constructor() { }

  ngOnInit() {
  }

  protected switchMenu($event) {
    $event.parentNode.className === 'active' ? $event.parentNode.className = '' : $event.parentNode.className = 'active';
  }
}
