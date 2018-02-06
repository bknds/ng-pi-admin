import { Component } from '@angular/core';

@Component({
  selector: 'app-default-charts',
  templateUrl: './default-charts.component.html',
  styleUrls: ['./default-charts.component.scss']
})
export class DefaultChartsComponent {
  showloading: boolean = false;
  constructor() { }
  Baroptions = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
      orient: 'vertical',
      x: 'left',
      data: ['1', '2', '3', '4']
    },
    //roseType: 'angle',
    series: [
      {
        name: '111',
        type: 'pie',
        radius: [0, '50%'],
        data: [
          { value: 335, name: '1' },
          { value: 310, name: '2' },
          { value: 234, name: '3' },
          { value: 135, name: '4' }
        ]
      }
    ]
  }
}
