import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab-content',
  templateUrl: './tab-content.component.html',
  styleUrls: ['./tab-content.component.scss']
})
export class TabContentComponent implements OnInit {

  @Input()
  isContentActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
