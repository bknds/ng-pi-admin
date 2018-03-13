import { Component, OnInit, Input } from '@angular/core';
import pell from 'pell';

@Component({
  selector: 'pell-editor',
  templateUrl: './pell-editor.component.html',
  styleUrls: ['./pell-editor.component.scss']
})
export class PellEditorComponent implements OnInit {

  @Input()
  defaultContent: string;

  constructor() { }

  ngOnInit() {
    function ensureHTTP(str) {
      return /^https?:\/\//.test(str) && str || `http://${str}`
    }

    let editor = pell.init({
      element: document.getElementById('pell'),
      defaultParagraphSeparator: 'p',
      styleWithCSS: true,
      onChange(html) {
        document.getElementById('text-output').innerHTML = html
        //document.getElementById('html-output').textContent = html
      }
    })

    document.getElementById('text-output').innerHTML = this.defaultContent;

    /* content init */
    editor.content.innerHTML = this.defaultContent;
  }

}