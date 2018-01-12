import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../shared/services/charts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ChartsService]
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;
  public chartsOptionItem;

  constructor(private _chartsService: ChartsService) { }

  ngOnInit() {
    this.chartsOptionItem = this._chartsService;
  }
}