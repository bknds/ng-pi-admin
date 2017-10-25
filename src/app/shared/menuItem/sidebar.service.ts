import { Injectable } from '@angular/core';
import { SIDEBAR_JSON } from '../../pages/sidebar-json';

@Injectable()
export class sidebarService {
  
  constructor() {
    this.queryAllNode(SIDEBAR_JSON);
  }
  
  private parentNode = null;
  private node = null;
  private pathItem = [];

  public queryParentNode(json:any, nodeId:any) {
    for (var i = 0; i < json.length; i++) {
      if (this.node) {
        break;
      }
      var obj = json[i];
      if (!obj || !obj.path) {
        continue;
      }
      if (obj.path == nodeId) {
        this.node = obj;
        break;
      } else {
        if (obj.children) {
          this.parentNode = obj;
          this.queryParentNode(obj.children, nodeId);
        } else {
          continue;
        }
      }
    }
    if (!this.node) {
      this.parentNode = null;
    }
    return {
      parentNode: this.parentNode,
      node: this.node
    };
  }

  public creatRouterLink(nodeId:any) {
    this.node = null;
    this.parentNode = null;
    
    let obj = this.queryParentNode(SIDEBAR_JSON, nodeId);

    if (obj.parentNode && obj.parentNode.path) {
      this.pathItem.unshift(obj.parentNode.path);
      return this.creatRouterLink(obj.parentNode.path);
    } else {
      return this.pathItem.join('/');
    }
  }

  public queryAllNode(Json:any) {

    Json.forEach((index) => {
      this.pathItem = [index.path];
      index.routerLink = this.creatRouterLink(index.path);
      console.log(index.routerLink);
      
      if (index.children) {
        delete index.routerLink;
        this.queryAllNode(index.children);
      }
    })
    
  }

  public putSidebarJson() {
    return SIDEBAR_JSON;
  }
}
