import { Component, OnInit } from '@angular/core';
import { AlertsComponent } from '../../../../shared/roots/alerts/alerts.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent extends AlertsComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() { }

  errorNotification() {
    this.alertMessages(
      {
        type: 'error',
        title: 'Error Test',
        value: 'Error TestError TestError Test'
      }
    );
  }
}
