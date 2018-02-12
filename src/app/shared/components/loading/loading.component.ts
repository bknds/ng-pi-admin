import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input()
  loading: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
