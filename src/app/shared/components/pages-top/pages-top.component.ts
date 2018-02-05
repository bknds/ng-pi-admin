import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
  providers: []
})

export class PagesTopComponent {
  sidebarToggle: boolean = true;

  constructor(private _globalService: GlobalService) { }

  _sidebarToggle() {
    this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
}