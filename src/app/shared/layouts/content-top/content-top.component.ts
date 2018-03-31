import { Component } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent {
  routeTitle;
  constructor(public _globalService: GlobalService) {
    this.getRouteTitle();
  }

  private getRouteTitle() {
    /* this._globalService.isActived$.subscribe(isActived => {
      this.routeTitle = isActived.title;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'isActived') {
        this.routeTitle = data.value.title;
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  returnHome() {
    //    this._globalService._isActived({ title: 'Dashboard' });
    this._globalService.dataBusChanged('isActived', { title: 'Dashboard' });
  }
}
