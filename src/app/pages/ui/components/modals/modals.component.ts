import { Component, OnInit } from '@angular/core';
import pell from 'pell';


@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})

export class ModalsComponent implements OnInit {

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