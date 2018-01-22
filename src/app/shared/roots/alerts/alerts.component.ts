import { Component, OnInit } from '@angular/core';
import { AlertsModel } from '../../models/alerts-modal';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})

export class AlertsComponent implements OnInit {

  alertItem: Array<AlertsModel> = [
    { type: "error", title: "Error Test", value: "Error TestError TestError Test" },
    { type: "error", title: "Error Test", value: "Error TestError TestError Test" },
    { type: "error", title: "Error Test", value: "Error TestError TestError Test" }
  ];
  constructor() { }

  ngOnInit() { }

  alertMessages(data: AlertsModel): void {
    this.alertItem.push(data);
    console.log(data);
    alert('1212');
  }
}
