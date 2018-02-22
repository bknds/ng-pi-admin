import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";
import { Http } from '@angular/http';
import { environment } from "../../../environments/environment";

@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    private setHeader() {
    }

    private formatErrors(error: any) {
        let errorJson = error.json();
        return Observable.throw(errorJson);
    }

    public get(path: string) {
        let reqUrl = `${environment.api_url}${path}`;
        return this.http.get(reqUrl).catch(this.formatErrors).map(res => res.json());
    }

    public post(path: string, body) {
        let reqUrl = `${environment.api_url}${path}`;
        return this.http.post(reqUrl, body).catch(this.formatErrors).map(res => res.json());
    }

    public delete(path: string, deleteId) {
        let reqUrl = `${environment.api_url}${path}`;
        return this.http.delete(reqUrl, deleteId).catch(this.formatErrors).map(res => res.json());
    }
}