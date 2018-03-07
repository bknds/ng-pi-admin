import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})
export class RightConfigComponent implements OnInit {

  isConfigToggle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  configToggle() {
    this.isConfigToggle = !this.isConfigToggle;
  }
}
