import { Injectable } from '@angular/core';

@Injectable()
export class GlobalService {

    routerData:any;

    constructor() {
    }

    getRouterData(value) {
        this.routerData = value;
    }

    putRouterData() {
        console.log(this.routerData);
    }
}
