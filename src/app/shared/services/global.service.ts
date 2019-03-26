import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/* models */
/* import { TabMenuModel } from '../models/tabs-model';
import { NotificationModel } from '../models/notification-model'; */

@Injectable()
export class GlobalService {
    /*private sidebarToggleSource = new Subject<boolean>();
    sidebarToggle$ = this.sidebarToggleSource.asObservable();
    _sidebarToggleState(sidebarToggle: boolean) {
        this.sidebarToggleSource.next(sidebarToggle);
    }*/

    /* private tabsMenuSource = new Subject<TabMenuModel>();
    tabsMenu$ = this.tabsMenuSource.asObservable();
    _tabsMenu(tabsMenu: TabMenuModel) {
        this.tabsMenuSource.next(tabsMenu);
    }
    private tabsOrderSource = new Subject<Array<any>>();
    tabsOrder$ = this.tabsOrderSource.asObservable();
    _tabsOrder(tabsOrder: Array<any>) {
        this.tabsOrderSource.next(tabsOrder);
    }*/
    
    /* private notificationSource = new Subject<NotificationModel>();
    notification$ = this.notificationSource.asObservable();
    _notification(notification: NotificationModel) {
        this.notificationSource.next(notification);
    } */

    /* private isActivedSource = new Subject<any>();
    isActived$ = this.isActivedSource.asObservable();
    _isActived(isActived) {
        this.isActivedSource.next(isActived);
    }*/

    private dataSource = new Subject<DataSourceClass>();

    data$ = this.dataSource.asObservable();

    public dataBusChanged(ev, value) {
        this.dataSource.next({
            ev: ev,
            value: value
        })
    }
}


export class DataSourceClass {
    ev: string;
    value: any
}