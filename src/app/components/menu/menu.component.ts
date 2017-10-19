import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'com-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menu = [
    {
      path: 'form',
      data: {
        menu: {
          title: 'form',
        }
      },
      children: [
        {
          path: 'inputs',
          data: {
            menu: {
              title: 'inputs',
            }
          },
          children: [
            {
              path: 'inputs',
              data: {
                menu: {
                  title: 'inputs',
                }
              },
              children: [
                {
                  path: 'inputs',
                  data: {
                    menu: {
                      title: 'inputs',
                    }
                  }
                },
                {
                  path: 'inputs',
                  data: {
                    menu: {
                      title: 'inputs',
                    }
                  }
                },
              ]
            },
            {
              path: 'inputs',
              data: {
                menu: {
                  title: 'inputs',
                }
              }
            },
          ]
        },
        {
          path: 'inputs',
          data: {
            menu: {
              title: 'inputs',
            }
          }
        },
      ]
    }
  ]
  isNavOn:boolean = false;
  @Input() menuItem:any;
  @Input() child:boolean = false;
  constructor() { }

  ngOnInit() {
    console.log(this.menu);
  }

  navOn(){
    this.isNavOn?this.isNavOn = false:this.isNavOn = true;
  }
}
