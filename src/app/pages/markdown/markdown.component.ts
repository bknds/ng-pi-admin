import { Component, OnInit } from '@angular/core';
import SimpleMDE from 'simplemde';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss']
})
export class MarkdownComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const simplemde = new SimpleMDE({ element: document.getElementById('MyID') });

    simplemde.value('This text will appear in the editor');

  }

}
