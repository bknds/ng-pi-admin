import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { CardComponent } from './components/card/card.component';
import { TreeDiagramComponent } from './components/tree-diagram/tree-diagram.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    TreeDiagramComponent
  ],
  exports: [
    CardComponent,
    TreeDiagramComponent
  ]
})
export class SharedModule {
}
