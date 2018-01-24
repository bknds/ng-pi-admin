import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { GlobalService } from './services/global.service';

import { MenuComponent } from './components/menu/menu.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PagesTopComponent } from './components/pages-top/pages-top.component';
import { MsgCenterComponent } from './components/msg-center/msg-center.component';
import { NotificationComponent } from './components/notification/notification.component';

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
        MsgCenterComponent,
        NotificationComponent
    ],
    exports: [
        SidebarComponent,
        PagesTopComponent,
        MsgCenterComponent,
        NotificationComponent
    ]
})
export class SkeletonModule { }
