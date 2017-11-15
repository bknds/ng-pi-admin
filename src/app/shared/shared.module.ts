import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GlobalService } from './services/global.service';

import { MenuComponent } from './components/menu/menu.component';
import { CardComponent } from './components/card/card.component';
import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { PagesTopComponent } from './components/pages-top/pages-top.component';
import { ContentTopComponent } from './components/content-top/content-top.component';
import { TreeDiagramComponent } from './components/tree-diagram/tree-diagram.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    GlobalService
  ],
  declarations: [
    MenuComponent,
    CardComponent,
    SiderbarComponent,
    PagesTopComponent,
    ContentTopComponent,
    TreeDiagramComponent
  ],
  exports: [
    CardComponent,
    SiderbarComponent,
    PagesTopComponent,
    ContentTopComponent,
    TreeDiagramComponent
  ]
})
export class SharedModule {
}
