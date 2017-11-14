import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  
  @Input() isViewAll;

  constructor(public _globalService: GlobalService) { }

  isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  onChooseMenuItem(item) {
    this._globalService.transfer(item);
  }

}
