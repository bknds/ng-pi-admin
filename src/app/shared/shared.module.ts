import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* components */
import { CardComponent } from './components/card/card.component';
import { TreeDiagramComponent } from './components/tree-diagram/tree-diagram.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabContentComponent } from './components/tabs/tab-content/tab-content.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CardComponent,
    TreeDiagramComponent,
    TodolistComponent,
    TabsComponent,
    TabContentComponent,
    ModalComponent
  ],
  exports: [
    CardComponent,
    TreeDiagramComponent,
    TodolistComponent,
    TabsComponent,
    TabContentComponent,
    ModalComponent
  ]
})
export class SharedModule {
}
