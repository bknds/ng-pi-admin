import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'du-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() cardTitle: any;
  @Input() isToggle:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  close() {
    this.isToggle = false;
  }
}
