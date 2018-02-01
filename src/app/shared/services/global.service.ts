import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
/* models */
import { TabMenuModel } from "../models/tabs-model";
import { NotificationModel } from "../models/notification-model";

@Injectable()
export class GlobalService {
    /* sidebar toggle */
    private sidebarToggleSource = new Subject<boolean>();

    sidebarToggle$ = this.sidebarToggleSource.asObservable();

    _sidebarToggleState(sidebarToggle: boolean) {
        this.sidebarToggleSource.next(sidebarToggle);
    }

    /* tabs title */
    private tabsMenuSource = new Subject<TabMenuModel>();

    tabsMenu$ = this.tabsMenuSource.asObservable();

    _tabsMenu(tabsMenu: TabMenuModel) {
        this.tabsMenuSource.next(tabsMenu);
    }

    /* tabs id */
    private tabsOrderSource = new Subject<Array<any>>();

    tabsOrder$ = this.tabsOrderSource.asObservable();

    _tabsOrder(tabsOrder: Array<any>) {
        this.tabsOrderSource.next(tabsOrder);
    }

    /* notification */
    private notificationSource = new Subject<NotificationModel>();

    notification$ = this.notificationSource.asObservable();

    _notification(notification: NotificationModel) {
        this.notificationSource.next(notification);
    }
}
