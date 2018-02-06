import { Component, Input } from '@angular/core';

@Component({
  selector: 'du-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input()
  pagerId: string;

  @Input()
  pageChangedfn;

  @Input()
  pageInfo: pageInfoModel;

  @Input()
  pageNumberChangefn;

}

export class pageInfoModel {
  pageSize: number;
  pageNumber: number;
}
