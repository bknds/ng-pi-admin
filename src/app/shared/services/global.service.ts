import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { TabMenuModel } from "../models/tabs-model";

@Injectable()
export class GlobalService {
    /* sidebar toggole */
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

}
