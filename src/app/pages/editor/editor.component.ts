import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  ckeditorContent: string = '<p>邮件回复提示信息！</p>';
  public config = {
    uiColor: '#ffffff',
    height: '400',
  };
  constructor() { }

  ngOnInit() {
  }

}