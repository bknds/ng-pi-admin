import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tree-diagram',
  templateUrl: './tree-diagram.component.html',
  styleUrls: ['./tree-diagram.component.scss']
})
export class TreeDiagramComponent implements OnInit {
  @Input() treesItem: any;

  constructor() { }

  ngOnInit() {
    //console.log(this.treesItem);
  }

}
