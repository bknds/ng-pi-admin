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


    DATA = {
        "date": "20180404",
        "message": "Success !",
        "status": 200,
        "city": "深圳",
        "count": 410,
        "data": {
            "shidu": "87%",
            "pm25": 28.0,
            "pm10": 51.0,
            "quality": "良",
            "wendu": "21",
            "ganmao": "极少数敏感人群应减少户外活动",
            "yesterday": {
                "date": "03日星期二",
                "sunrise": "06:16",
                "high": "高温 29.0℃",
                "low": "低温 21.0℃",
                "sunset": "18:40",
                "aqi": 47.0,
                "fx": "无持续风向",
                "fl": "<3级",
                "type": "多云",
                "notice": "阴晴之间，谨防紫外线侵扰"
            },
            "forecast": [{
                "date": "04日星期三",
                "sunrise": "06:15",
                "high": "高温 29.0℃",
                "low": "低温 22.0℃",
                "sunset": "18:40",
                "aqi": 31.0,
                "fx": "无持续风向",
                "fl": "<3级",
                "type": "多云",
                "notice": "阴晴之间，谨防紫外线侵扰"
            },
            {
                "date": "05日星期四",
                "sunrise": "06:14",
                "high": "高温 30.0℃",
                "low": "低温 19.0℃",
                "sunset": "18:40",
                "aqi": 26.0,
                "fx": "无持续风向",
                "fl": "<3级",
                "type": "多云",
                "notice": "阴晴之间，谨防紫外线侵扰"
            },
            {
                "date": "06日星期五",
                "sunrise": "06:13",
                "high": "高温 25.0℃",
                "low": "低温 16.0℃",
                "sunset": "18:41",
                "aqi": 36.0,
                "fx": "北风",
                "fl": "3-4级",
                "type": "阵雨",
                "notice": "阵雨来袭，出门记得带伞"
            },
            {
                "date": "07日星期六",
                "sunrise": "06:13",
                "high": "高温 21.0℃",
                "low": "低温 15.0℃",
                "sunset": "18:41",
                "aqi": 74.0,
                "fx": "无持续风向",
                "fl": "<3级",
                "type": "阵雨",
                "notice": "阵雨来袭，出门记得带伞"
            },
            {
                "date": "08日星期日",
                "sunrise": "06:12",
                "high": "高温 25.0℃",
                "low": "低温 17.0℃",
                "sunset": "18:42",
                "aqi": 74.0,
                "fx": "无持续风向",
                "fl": "<3级",
                "type": "晴",
                "notice": "愿你拥有比阳光明媚的心情"
            }]
        }
    }
}
