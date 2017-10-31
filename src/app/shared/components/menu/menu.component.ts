import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {
  @Input() menuInfo: any;

  @Output() chooseMenuItem = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  protected openMenu($event) {
    $event.parentNode.className === 'active' ? $event.parentNode.className = '' : $event.parentNode.className = 'active';
  }

  public onChooseMenuItem(item) {
    this.chooseMenuItem.emit(item);
  }

}
