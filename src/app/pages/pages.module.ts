import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { IndexComponent } from './index/index.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

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
