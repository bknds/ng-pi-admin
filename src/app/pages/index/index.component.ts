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
  option;
  option2;
  option3;

  constructor(private _chartsService: ChartsService) { }

  ngOnInit() {
    this.option = this._chartsService.lineOption;
    this.option2 = this._chartsService.option;
    this.option3 = this._chartsService.option3;
  }

  isToggle: boolean = false;

  modalOpen() {
    this.isToggle = true;
  }


}