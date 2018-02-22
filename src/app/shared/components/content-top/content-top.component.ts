import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss']
})
export class ContentTopComponent implements OnInit {
  selectedRoute;  

  constructor(public _globalService: GlobalService) { }

  ngOnInit() {
    this._globalService.isActived$.subscribe(isActived => {
      this.selectedRoute = isActived.title;
    }, error => {
      console.log('Error: ' + error);
    });
  }

}
