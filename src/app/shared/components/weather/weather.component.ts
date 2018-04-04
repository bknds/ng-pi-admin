import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  today;
  data: Array<any>;
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    /* this._weatherService.getJSON().subscribe(data => {
      console.log(data);
    }); */
    this.data = this._weatherService.DATA;
    this.switch(0);
  }

  switch(index) {
    this.data.forEach(item => {
      item.isSelect = false;
    });
    this.data[index].isSelect = true;
    this.today = this.data[index];
  }
}
