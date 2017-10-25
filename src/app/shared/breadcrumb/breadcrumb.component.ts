import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'du-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadcrumbItem: any;
  
  constructor() { }

  ngOnInit() {
  }

}
