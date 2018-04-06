import { Injectable } from '@angular/core';
import { Jsonp } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
    static times = 0;
    private baseUrl: string = 'https://www.sojson.com/open/api/weather/json.shtml?city=深圳';

    constructor(private jsonp: Jsonp) { }

    getJSON() {
        let callback = "&callback=" + "__ng_jsonp__.__req" + WeatherService.times + ".finished";
        WeatherService.times++;
        let url = this.baseUrl + callback;
        return this.jsonp.get(url).map(res => res.json());
    }


    DATA = [
        {
            "date": "03-04",
            "high": "29.0℃",
            "low": "22.0℃",
            "fl": "<3级",
            "type": "dayu",
        }, {
            "date": "03-05",
            "high": "32.0℃",
            "low": "28.0℃",
            "fl": "<2级",
            "type": "duoyun",
        }, {
            "date": "03-06",
            "high": "19.0℃",
            "low": "17.0℃",
            "fl": "<3级",
            "type": "leidian",
        }, {
            "date": "03-07",
            "high": "32.0℃",
            "low": "25.0℃",
            "fl": "<2级",
            "type": "qing",
        }, {
            "date": "03-08",
            "high": "27.0℃",
            "low": "22.0℃",
            "fl": "<4级",
            "type": "yintian",
        }]
}
