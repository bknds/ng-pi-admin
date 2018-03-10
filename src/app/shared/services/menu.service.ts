import { Injectable } from '@angular/core';
import { MENU_ITEM } from '../../pages/menu';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable()
export class menuService {

  constructor(public _globalService: GlobalService, private _router: Router) {
    this.getNodePath(MENU_ITEM);
  }

  private parent_node = null;
  private path_item = [];
  private node = null;

  protected queryParentNode(json: any, node_id: any) {
    for (let i = 0; i < json.length; i++) {
      if (this.node)
        break;
      const obj = json[i];
      if (!obj || !obj.path)
        continue;
      if (obj.path === node_id) {
        this.node = obj;
        break;
      } else {
        if (obj.children) {
          this.parent_node = obj;
          this.queryParentNode(obj.children, node_id);
        } else {
          continue;
        }
      }
    }
    if (!this.node)
      this.parent_node = null;
    return {
      parent_node: this.parent_node,
      node: this.node
    };
  }

  protected creatRouterLink(nodeId: any) {
    this.node = null;
    this.parent_node = null;
    const menuObj = this.queryParentNode(MENU_ITEM, nodeId);
    if (menuObj.parent_node && menuObj.parent_node.path) {
      this.path_item.unshift(menuObj.parent_node.path);
      return this.creatRouterLink(menuObj.parent_node.path);
    } else {
      return this.path_item;
    }
  }

  protected getNodePath(json: any): void {
    json.forEach((index) => {
      if (index.children) {
        //delete index.routerLink;
        this.getNodePath(index.children);
        index.toggle = 'init';
      } else {
        this.path_item = [index.path];
        index.routerLink = this.creatRouterLink(index.path);
        index.routerLink.unshift('pages');
        index.routerLink.unshift('/');
      }
    })
  }

  public putSidebarJson() {
    return MENU_ITEM;
  }

  public selectItem(item) {
    item.forEach(element => {
      if (element.routerLink) {
        element.isActive = this._router.isActive(this._router.createUrlTree(element.routerLink), true);
        if (element.isActive)
          this._globalService._isActived(element);
      } else if (element.children)
        this.selectItem(element.children);
    });
  }

}
