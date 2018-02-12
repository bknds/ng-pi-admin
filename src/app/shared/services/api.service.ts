import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Http } from '@angular/http';
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    private formatErrors(error: any) {
        let errorJson = error.json();
        return Observable.throw(errorJson);
    }

    public get(path: string) {
        let getUrl = `${environment.api_url}${path}`;
        return this.http.get(getUrl).catch(this.formatErrors).map(res => res.json());
    }

    public post(path: string, body) {
        let getUrl = `${environment.api_url}${path}`;
        return this.http.post(getUrl, body).catch(this.formatErrors).map(res => res.json());
    }/* post数据必须符合json内数据格式，不可自带主键id  */
}