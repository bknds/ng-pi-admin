import { Component } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss'],
  providers: [GlobalService]
})

export class PagesComponent {
  public menuItemInfo;
  public routerTitle;
  constructor(public _globalService: GlobalService) {
    this._globalService.damage$.subscribe(damage => {
      this.menuItemInfo = damage;
      this.routerTitle = this.menuItemInfo.title;
    }, error => {
      console.log('Error: ' + error);
    });
  }
}