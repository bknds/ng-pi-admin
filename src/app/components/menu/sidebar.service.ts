import { Injectable } from '@angular/core';
import { SIDEBAR_JSON } from '../../pages/sidebar_json';

@Injectable()
export class sidebarService {
  constructor() {
    this.JsonNode(SIDEBAR_JSON);
    console.log(SIDEBAR_JSON);
  }
  private parentNode = null;
  private node = null;
  private arr1 = [];

  getNode(json, nodeId) {
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
          this.getNode(obj.children, nodeId);
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

  public Query(nodeId) {
    this.node = null;
    this.parentNode = null;
    let obj = this.getNode(SIDEBAR_JSON, nodeId);
    if (obj.parentNode && obj.parentNode.path) {
      this.arr1.unshift(obj.parentNode.path);
      return this.Query(obj.parentNode.path);
    } else {
      this.arr1.unshift('', 'pages');
      return this.arr1.join('/');
    }
  }

  JsonNode(Json) {
    for (let index = 0; index < Json.length; index++) {
      this.arr1 = [Json[index].path];
      Json[index].routerLink = this.Query(Json[index].path);
      if (Json[index].children) {
        this.JsonNode(Json[index].children);
      }
    }
  }

}
