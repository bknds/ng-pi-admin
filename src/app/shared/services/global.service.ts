import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class GlobalService {
    /* sidebar toggole */
    private isViewAllSource = new Subject<boolean>();

    isViewAll$ = this.isViewAllSource.asObservable();

    _isViewAllState(isViewAll: boolean) {
        this.isViewAllSource.next(isViewAll);
    }

    /* tabs title */
    private tabsTitleSource = new Subject<string>();

    tabsTitle$ = this.tabsTitleSource.asObservable();

    _tabsTitle(tabsTitle: string) {
        this.tabsTitleSource.next(tabsTitle);
    }

}
