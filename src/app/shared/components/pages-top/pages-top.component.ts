import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
  providers: []
})

export class PagesTopComponent implements OnInit {
  isViewAll: boolean = true;

  constructor(private _globalService: GlobalService) { }

  ngOnInit() { }

  _isViewAll() {
    this._globalService.isViewAll$.subscribe(isViewAll => {
      this.isViewAll = isViewAll;
    }, error => {
      console.log('Error: ' + error);
    });

    this._globalService._isViewAllState(!this.isViewAll);
  }
}
