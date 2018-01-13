import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { TabMenuModel } from "../models/tabs-model";

@Injectable()
export class GlobalService {
    /* sidebar toggole */
    private isViewAllSource = new Subject<boolean>();

    isViewAll$ = this.isViewAllSource.asObservable();

    _isViewAllState(isViewAll: boolean) {
        this.isViewAllSource.next(isViewAll);
    }

    /* tabs title */
    private tabsMenuSource = new Subject<TabMenuModel>();

    tabsMenu$ = this.tabsMenuSource.asObservable();

    _tabsMenu(tabsMenu: TabMenuModel) {
        this.tabsMenuSource.next(tabsMenu);
    }

}
