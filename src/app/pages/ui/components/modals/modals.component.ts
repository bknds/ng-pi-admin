import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';

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

  onClose() {
    swal({
      type: 'success',
      title: 'Success!',
      text: 'close it!',
    });
  }
}
