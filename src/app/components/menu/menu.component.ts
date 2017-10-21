import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  isNavOn: boolean = false;
  @Input() menuItem: any;
  @Input() child: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.menu);
  }

  toggleTarget() {
    
  }

  userInfo() {
    this.router.navigate(['/pages/index']);
  }

  userInfo2() {
    this.router.navigate(['/pages/form/inputs']);
  }
}
