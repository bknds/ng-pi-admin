import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'du-treeDiagram',
  templateUrl: './treeDiagram.component.html',
  styleUrls: ['./treeDiagram.component.scss']
})
export class TreeDiagramComponent implements OnInit {
  @Input() treesItem: any;

  constructor() { }

  ngOnInit() {
    //console.log(this.treesItem);
  }

}
