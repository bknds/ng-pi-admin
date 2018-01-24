import { Component, OnInit } from '@angular/core';
import { RootComponent } from '../../../../shared/roots/root.component';
import { GlobalService } from '../../../../shared/services/global.service';

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

  default() {
    this.alertMessage();
  }

  success() {
    this.alertMessage(
      {
        type: 'success',
        title: 'Look here!',
        value: 'This alert needs your attention.'
      }
    );
  }
  warning() {
    this.alertMessage(
      {
        type: 'warning',
        title: 'Look here!',
        value: 'This alert needs your attention.'
      }
    );
  }
  danger() {
    this.alertMessage(
      {
        type: 'danger',
        title: 'Look here!',
        value: 'This alert needs your attention.'
      }
    );
  }
  info() {
    this.alertMessage(
      {
        type: 'info',
        title: 'Look here!',
        value: 'This alert needs your attention.'
      }
    );
  }
}