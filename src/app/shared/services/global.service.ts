import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class GlobalService {

    private isViewAllSource = new Subject<boolean>();

    isViewAll$ = this.isViewAllSource.asObservable();

    _isViewAllState(isViewAll: boolean) {
        this.isViewAllSource.next(isViewAll);
    }
}
