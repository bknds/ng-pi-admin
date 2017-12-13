import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  areaItem = [
    {
      row: 1, item: [
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '闲置区' },
      ]
    },
    {
      row: 2, item: [
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
      ]
    },
    {
      row: 3, item: [
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: 'transparent', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
      ]
    },
    {
      row: 4, item: [
        { background: '#96394f', name: '正常销货区' },
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#80010f', name: '热销品区' },
        { background: '#80010f', name: '' },
        { background: '#80010f', name: '' },
        { background: '#80010f', name: '' },
        { background: '#104484', name: '贵重品区' },
        { background: '#96394f', name: '打单区' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
      ]
    },
    {
      row: 5, item: [
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#96394f', name: '' },
        { background: '#80010f', name: '' },
        { background: '#80010f', name: '' },
        { background: '#80010f', name: '' },
        { background: '#80010f', name: '' },
        { background: '#104484', name: '' },
        { background: '#96394f', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
        { background: '#999', name: '' },
      ]
    },
    {
      row: 6, item: [
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: 'FBA' },
      ]
    },
    {
      row: 7, item: [
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#96394f', name: 'M1' },
        { background: '#fda400', name: 'M1' },
        { background: '#fda400', name: 'M1' },
        { background: '#fda400', name: 'M1' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
      ]
    },
    {
      row: 8, item: [
        { background: '#c1232b', name: '大件待上架区' },
        { background: '#eb8146', name: 'M1' },
        { background: '#eb8146', name: 'M1' },
        { background: '#eb8146', name: 'M1' },
        { background: '#eb8146', name: 'M1' },
        { background: '#eb8146', name: 'M1' },
        { background: '#999', name: '物流退货区' },
        { background: '#ffb248', name: 'M1' },
        { background: '#ffb248', name: 'M1' },
        { background: '#ffb248', name: 'M1' },
        { background: '#fda400', name: 'M1' },
        { background: '#fda400', name: 'M1' },
        { background: '#fda400', name: 'M1' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
      ]
    }
    ,
    {
      row: 9, item: [
        { background: '#eb8146', name: 'M1' },
        { background: '#eb8146', name: 'M1' },
        { background: '#eb8146', name: 'M1' },
        { background: '#eb8146', name: 'M1' },
        { background: '#999', name: '办公区' },
        { background: '#ffb248', name: 'M1' },
        { background: '#ffb248', name: 'M1' },
        { background: '#ffb248', name: 'M1' },
        { background: '#fda400', name: 'M1' },
        { background: '#fda400', name: 'M1' },
        { background: '#999', name: '洗手间' },
        { background: '#999', name: '多功能厅' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
        { background: '#ee6058', name: '' },
      ]
    }
  ];
}
