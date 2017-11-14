import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { collapse } from '../../animation/collapse-animate';
import { TransferService } from '../../services/transfer.service';

@Component({
  selector: 'du-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [collapse],
  providers: []
})

export class MenuComponent implements OnInit {
  @Input() menuInfo: any;

  constructor(public _transferService: TransferService) { }

  ngOnInit() {
  }

  isToggleOn(item) {
    item.toggle === 'on' ? item.toggle = 'off' : item.toggle = 'on';
  }

  onChooseMenuItem(item) {
    this._transferService.transfer(item);
  }

}
