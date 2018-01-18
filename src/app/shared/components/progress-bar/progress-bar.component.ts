import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input()
  percentNumber: number;
  @Input()
  color: string = 'primary';
  @Input()
  type: string = 'default';

  theme: string;
  constructor() { }

  ngOnInit() {
    this.theme = `progress-bar progress-bar-${this.color}`;
  }

}
