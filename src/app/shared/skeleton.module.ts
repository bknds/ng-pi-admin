import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { GlobalService } from './services/global.service';

import { MenuComponent } from './components/menu/menu.component';

import { SiderbarComponent } from './components/siderbar/siderbar.component';
import { PagesTopComponent } from './components/pages-top/pages-top.component';
import { ContentTopComponent } from './components/content-top/content-top.component';

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
        SiderbarComponent,
        PagesTopComponent,
        ContentTopComponent
    ],
    exports: [
        SiderbarComponent,
        PagesTopComponent,
        ContentTopComponent
    ]
})
export class SkeletonModule {
}
