import { Injectable } from "@angular/core";
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { environment } from "../../../environments/environment";
@Injectable()
export class ApiService {
    constructor(private http: Http) { }

    public get(path: string) {
        let getUrl = `${environment.api_url}${path}`;

        return this.http.get(getUrl).map(res => res.json());
    }
}