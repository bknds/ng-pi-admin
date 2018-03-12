import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.scss']
})

export class ModalsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  openModal(modal) {
    modal.open();
  }

  closeModal(modal) {
    modal.close();
  }
}