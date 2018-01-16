import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'du-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input()
  pagerId: string;

  @Input()
  pageChangedfn;

  @Input()
  pageInfo: pageInfoModel;

  @Input()
  pageNumberChangefn;

  constructor() { }

  ngOnInit() {
  }

}

export class pageInfoModel {
  pageSize: number;
  pageNumber: number;
}
