import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GlobalService } from './services/global.service';

import { MenuComponent } from './components/menu/menu.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagesTopComponent } from './components/pages-top/pages-top.component';
import { ContentTopComponent } from './components/content-top/content-top.component';
import { BackTopComponent } from './components/back-top/back-top.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [
        GlobalService
    ],
    declarations: [
        MenuComponent,
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent,
        BackTopComponent
    ],
    exports: [
        SidebarComponent,
        PagesTopComponent,
        ContentTopComponent,
        BackTopComponent
    ]
})
export class SkeletonModule {
}
