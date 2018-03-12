import { Component, OnInit } from '@angular/core';
import pell from 'pell';

@Component({
  selector: 'pell-editor',
  templateUrl: './pell-editor.component.html',
  styleUrls: ['./pell-editor.component.scss']
})
export class PellEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    function ensureHTTP(str) {
      return /^https?:\/\//.test(str) && str || `http://${str}`
    }

    pell.init({
      element: document.getElementById('pell'),
      defaultParagraphSeparator: 'p',
      styleWithCSS: true,
      onChange: function (html) {
        document.getElementById('text-output').innerHTML = html
        document.getElementById('html-output').textContent = html
      }
    })

  }

}
