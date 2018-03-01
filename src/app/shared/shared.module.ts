import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

/* components */
import { CardComponent } from './components/card/card.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TabContentComponent } from './components/tabset/tab-content/tab-content.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { SwitchComponent } from './components/switch/switch.component';
import { SortComponent } from './components/sort/sort.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    SortComponent
  ],
  exports: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    SortComponent
  ]
})
export class SharedModule { }
