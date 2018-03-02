import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  percent: number;
  @Input()
  theme: string = 'primary';
  @Input()
  size: string = 'sm';
  @Input()
  percentShow: boolean = true;

  themeColor: string;
  constructor() { }

  ngOnInit() {
    this.themeColor = `progress-bar progress-bar-${this.theme}`;
  }

}
