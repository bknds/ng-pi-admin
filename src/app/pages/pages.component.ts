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

  constructor(public _globalService: GlobalService) {
    this._globalService.damage$.subscribe(damage => {
      console.log(damage);
    }, error => {
      console.log('Error: ' + error);
    });
  }

}