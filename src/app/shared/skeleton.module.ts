import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GlobalService } from './services/global.service';

import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagesTopComponent } from './components/pages-top/pages-top.component';
import { NotificationComponent } from './components/notification/notification.component';
import { LoadingComponent } from './components/loading/loading.component';

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
        NotificationComponent,
        LoadingComponent
    ],
    exports: [
        SidebarComponent,
        PagesTopComponent,
        NotificationComponent,
        LoadingComponent
    ]
})
export class SkeletonModule { }
