import { Injectable } from '@angular/core';
import { SIDEBAR_JSON } from '../../pages/sidebar_json';

@Injectable()
export class sidebarService {
  private parentNode:any = null;
  private node:any = null;
  constructor() {
    this.cao(SIDEBAR_JSON,'btn');
  }
  cao(json,nodeId) {
    let parentNode: any = null;
    let node: any = null;
   
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
  }
}
