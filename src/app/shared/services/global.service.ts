import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class GlobalService {

    private damageSource = new Subject<any>();
    private isViewAllSource = new Subject<boolean>();

    damage$ = this.damageSource.asObservable();
    isViewAll$ = this.isViewAllSource.asObservable();

    transfer(damage: any) {
        this.damageSource.next(damage);
    }

    _isViewAllState(isViewAll: boolean) {
        this.isViewAllSource.next(isViewAll);
    }
}
