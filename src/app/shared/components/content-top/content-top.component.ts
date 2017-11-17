import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'content-top',
  templateUrl: './content-top.component.html',
  styleUrls: ['./content-top.component.scss'],
  providers: [GlobalService]
})

export class ContentTopComponent implements OnInit {
  @Input() routerTitle: any;

  breadcrumbItem = ['form', 'inputs', 'btn'];

  constructor(public _globalService: GlobalService) {
  }

  ngOnInit() {
    console.log(this.routerTitle);
  }


}
