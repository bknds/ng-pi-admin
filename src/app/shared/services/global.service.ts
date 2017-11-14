import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class GlobalService {

    //定义数据源用来产生数据流
    private damageSource = new Subject<any>();
    private isViewAllSource = new Subject<boolean>();
    //转换数据流为Observable
    damage$ = this.damageSource.asObservable();
    isViewAll$ = this.isViewAllSource.asObservable();

    transfer(damage: any) {
        this.damageSource.next(damage);
    }

    _isViewAllState(isViewAll) {
        this.isViewAllSource.next(isViewAll);
    }
}
