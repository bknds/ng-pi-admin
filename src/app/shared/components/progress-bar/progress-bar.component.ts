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
  color: string;

  theme: string;
  constructor() { }

  ngOnInit() {
    console.log(this.percentNumber);
    this.theme = `progress-bar progress-bar-${this.color}`;
  }

}
