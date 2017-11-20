import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
/* components */
import { IndexComponent } from './index/index.component';
import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        PagesComponent,
        IndexComponent
]
})
export class PagesModule {
}
