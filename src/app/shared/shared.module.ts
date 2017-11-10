import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { MenuComponent } from './components/menu/menu.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { HistoryPageComponent } from './components/historyPage/historyPage.component';
import { PaSiderbarComponent } from './components/paSiderbar/paSiderbar.component';
import { TreeDiagramComponent } from './components/treeDiagram/treeDiagram.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MenuComponent,
    PaSiderbarComponent,
    BreadcrumbComponent,
    HistoryPageComponent,
    TreeDiagramComponent
  ],
  exports: [
    PaSiderbarComponent,
    BreadcrumbComponent,
    HistoryPageComponent,
    TreeDiagramComponent
  ]
})
export class SharedModule {
}
