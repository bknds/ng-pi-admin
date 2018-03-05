import { Component, OnInit } from '@angular/core';
import { TreesService } from './trees.service';

@Component({
  selector: 'app-file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss'],
  providers: [TreesService]
})
export class FileTreeComponent implements OnInit {

  fileData: Array<any>;
  constructor(private _TreesService: TreesService) { }

  ngOnInit() {
    this.fileData = this._TreesService.FILE_DATA;
  }

}
