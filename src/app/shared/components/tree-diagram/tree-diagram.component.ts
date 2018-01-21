import { Component, OnInit, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';

@Component({
  selector: 'tree-diagram',
  templateUrl: './tree-diagram.component.html',
  styleUrls: ['./tree-diagram.component.scss'],
  animations: [collapse]
})
export class TreeDiagramComponent implements OnInit {
  @Input() treesItem: any;

  constructor() { }

  ngOnInit() {
    this.treesItem.forEach(element => {
      element.toggle = 'off';
    });
  }

  toggleItem(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  onCheckChanged(item) {
    console.log('111');
    
    item.isPer = !item.isPer;
    if (item.children) {
      item.children.forEach(index => {
        this.onCheckChanged(index);
      });
    }
  }
}
