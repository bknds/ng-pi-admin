import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/* models */
import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model';

@Injectable()
export class GlobalService {
    /* sidebar toggle */
    private sidebarToggleSource = new Subject<boolean>();

    sidebarToggle$ = this.sidebarToggleSource.asObservable();

    _sidebarToggleState(sidebarToggle: boolean) {
        this.sidebarToggleSource.next(sidebarToggle);
    }

    /* tabs title */
    // tslint:disable-next-line:member-ordering
    private tabsMenuSource = new Subject<TabMenuModel>();

    // tslint:disable-next-line:member-ordering
    tabsMenu$ = this.tabsMenuSource.asObservable();

    _tabsMenu(tabsMenu: TabMenuModel) {
        this.tabsMenuSource.next(tabsMenu);
    }

    /* tabs choosen */
    // tslint:disable-next-line:member-ordering
    private tabsOrderSource = new Subject<Array<any>>();

    // tslint:disable-next-line:member-ordering
    tabsOrder$ = this.tabsOrderSource.asObservable();

    _tabsOrder(tabsOrder: Array<any>) {
        this.tabsOrderSource.next(tabsOrder);
    }

    /* notification */
    // tslint:disable-next-line:member-ordering
    private notificationSource = new Subject<NotificationModel>();

    // tslint:disable-next-line:member-ordering
    notification$ = this.notificationSource.asObservable();

    _notification(notification: NotificationModel) {
        this.notificationSource.next(notification);
    }


    /* router isActive */
    // tslint:disable-next-line:member-ordering
    private isActivedSource = new Subject<any>();

    // tslint:disable-next-line:member-ordering
    isActived$ = this.isActivedSource.asObservable();

    _isActived(isActived) {
        this.isActivedSource.next(isActived);
    }
}
