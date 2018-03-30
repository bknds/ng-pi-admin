import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import pell from 'pell';

@Component({
  selector: 'pell-editor',
  templateUrl: './pell-editor.component.html',
  styleUrls: ['./pell-editor.component.scss']
})
export class PellEditorComponent implements OnInit {

  @Input() defaultContent: string = '<i>Please enter content...</i>';

  @Output() content = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.editorInit();
  }

  editorInit() {
    let that = this;

    function ensureHTTP(str) {
      return /^https?:\/\//.test(str) && str || `http://${str}`;
    }

    const editor = pell.init({
      element: document.getElementById('pell'),
      defaultParagraphSeparator: 'p',
      styleWithCSS: true,
      onChange(html) {
        that.content.emit(html);
      }
    });

    /* content init */
    editor.content.innerHTML = this.defaultContent;
  }
}
