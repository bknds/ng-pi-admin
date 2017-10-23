import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { sidebarService } from "./sidebar.service";

@Component({
  selector: 'com-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  providers: [sidebarService]
})
export class MenuComponent implements OnInit {
  menu = [
    {
      path: 'index',
      title: 'index'
    },
    {
      path: 'form',
      title: 'form',
      children: [
        {
          path: 'inputs',
          title: 'inputs',
          children: [
            {
              path: 'btn',
              title: 'btn',
            }
          ]
        }
      ]
    }
  ]
  @Input() menuItem: any;
  @Input() child: boolean = false;
  constructor(private router: Router,
    private routeInfo: ActivatedRoute,
    private sidebarService: sidebarService) { }
  ngOnInit() {
    console.log(this.sidebarService);
    //this.toggleTarget();
  }

  toggleTarget() {
    let parentNode: any = null;
    let node: any = null;

    function queryNode(json, nodeId) {
      for (let index of json) {
        this.queryPath(json, index.path);
        if (index.children) {
          for (let i of index.children) {
            this.queryPath(json, i.path);
          }
        }
      }
    }

    function queryPath(json, nodeId) {
      for (let i = 0; i < json.length; i++) {
        if (node) {
          break;
        }
        let obj = json[i];
        if (!obj || !obj.path) {
          continue;
        }
        if (obj.path == nodeId) {
          node = obj;
          break;
        } else {
          if (obj.children) {
            parentNode = obj;
            queryPath(obj.children, nodeId);
          } else {
            continue;
          }
        }
      }
      if (!node) {
        parentNode = null;
      }
      return {
        parentNode: parentNode,
        node: node
      };
    }
    let paths = ['inputs'];
    let obj = queryPath(this.menu, 'inputs');
    if (obj.parentNode) {
      paths.unshift(obj.parentNode.path);
    }
    paths.unshift('/', 'pages');
    console.log(paths.toString());

  }

  userInfo() {
    this.router.navigate(['/pages/index']);
  }

  userInfo2() {
    this.router.navigate(['/pages/form/inputs']);
  }
}
