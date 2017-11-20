import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  template: `<router-outlet></router-outlet>`
})
export class UiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
