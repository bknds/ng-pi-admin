import { Component, ViewChild, HostListener, Input, ElementRef } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'back-top',
  styleUrls: ['./back-top.component.scss'],
  template: `
    <i #baBackTop class="fa fa-angle-up back-top ba-back-top" title="Back to Top"></i>
  `
})
export class BackTopComponent {

  @ViewChild('baBackTop') _selector: ElementRef;

  ngAfterViewInit() {
    //this._onWindowScroll();
  }

  @HostListener('click')
  _onClick(): boolean {
    $('.pages-content').animate({ scrollTop: 0 }, 600);
    return false;
  }

  @HostListener('window:scroll')
  _onWindowScroll(): void {
    let el = this._selector.nativeElement;
    window.scrollY > 300 ? $(el).fadeIn(1000) : $(el).fadeOut(1000);
  }
}