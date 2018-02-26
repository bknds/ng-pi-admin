import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  iconItem = [
    "bug",
    "area-chart",
    "bar-chart",
    "bar-chart-o",
    "line-chart",
    "pie-chart",
    "cog",
    "cogs",
    "file",
    "bell",
    "calendar",
    "check",
    "close",
    "comment",
    "comments",
    "database",
    "image",
    "navicon",
    "home",
    "print",
    "star",
    "tag",
    "tags",
    "user",
  ];

  constructor() { }

  ngOnInit() {
  }

}
