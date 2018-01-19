import { Component, ViewChild, HostListener, Input, ElementRef } from '@angular/core';
//import * as $ from "jquery";

@Component({
  selector: 'back-top',
  styleUrls: ['./back-top.component.scss'],
  template: `
    <i #baBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top" *ngIf="isShow"></i>
  `
})
export class BackTopComponent {
  isShow:boolean = false;
  @ViewChild('baBackTop') _selector: ElementRef;

  ngAfterViewInit() {
    //this._onWindowScroll();
  }

  @HostListener('click')
  _onClick(): boolean {
    //$('.pages-content').animate({ scrollTop: 0 }, 600);
    return false;
  }

  @HostListener('scroll')
  _onWindowScroll(): void {
      console.log('111');
  }
}