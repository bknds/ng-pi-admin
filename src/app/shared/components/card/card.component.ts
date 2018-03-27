import { Component, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [collapse]
})
export class CardComponent {
  @Input() cardTitle: any;
  @Input() isCollapse: boolean = false;
  collapse: string = 'on';

  private collapseCard() {
    this.collapse === 'on' ? this.collapse = 'off' : this.collapse = 'on';
  }
}
