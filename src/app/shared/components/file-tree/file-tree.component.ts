import { Component, OnInit, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';

@Component({
  selector: 'file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss'],
  animations: [collapse]
})
export class FileTreeComponent implements OnInit {
  @Input() treesItem: any;

  constructor() { }

  ngOnInit() {
    this.treesItem.forEach(element => {
      element.toggle = 'init';
    });
  }

  toggleItem(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

}