import { Component, OnInit } from '@angular/core';
import { RootComponent } from '../../../../shared/roots/root.component';
import { GlobalService } from '../../../../shared/services/global.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent extends RootComponent implements OnInit {

  constructor(public _globalService: GlobalService) {
    super(_globalService);
  }

  ngOnInit() { }

  notification(type) {
    this.alertMessage(
      {
        type: type,
        title: 'Look here!',
        value: 'This alert needs your attention.'
      }
    );
  }

  alert2BasicMessage() {
    swal(
      'The Internet?',
      'That thing is still around?',
      'question'
    )
  }
}