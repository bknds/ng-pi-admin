import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  constructor() { }

  @ViewChild('ckContent') ckContent: ElementRef;

  ngOnInit() {
    this.saveAs();
  }

  saveAs() {
    //this.ckContent.nativeElement.innerHTML = this.ckeditorContent;
  }
}