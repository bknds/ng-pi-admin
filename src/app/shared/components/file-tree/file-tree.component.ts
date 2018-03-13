import { Component, OnInit, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';

@Component({
  selector: 'file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss'],
  animations: [collapse]
})
export class FileTreeComponent implements OnInit {
  @Input() model: any;
  @Input() isChild: boolean;
  constructor() { }

  ngOnInit() {
    this.model.forEach(element => {
      element.isSelect ? element.toggle = 'on' : element.toggle = 'init';
    });
  }

  private toggleItem(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

}
