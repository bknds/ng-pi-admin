import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { NotificationModel } from '../../models/notification-model';

@Component({
  selector: 'notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notificationItem: Array<NotificationModel> = [];
  constructor(private _globalService: GlobalService) { }

  ngOnInit() {
    this.getNewNotification();
  }

  public getNewNotification() {
    /* this._globalService.notification$.subscribe(notification => {
      this.notificationItem.push(notification)
    }, error => {
      console.log('Error: ' + error);
    });
 */
    this._globalService.data$.subscribe(data => {
      if (data.ev === 'notification') {
        this.notificationItem.push(data.value)
      }
    }, error => {
      console.log('Error: ' + error);
    });
  }

  closeAlert(index) {
    this.notificationItem.splice(index, 1);
  }

}
