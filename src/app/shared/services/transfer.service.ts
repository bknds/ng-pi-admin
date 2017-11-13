import { Injectable, OnInit, EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class TransferService{

    //定义数据源用来产生数据流
    private damageSource = new Subject<number>();
    //转换数据流为Observable
    damage$ = this.damageSource.asObservable();

    transfer(damage: any) {
        this.damageSource.next(damage);
    }

}
