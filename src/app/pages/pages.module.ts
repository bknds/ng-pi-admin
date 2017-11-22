import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { PageUseModule } from '../shared/pageuse.module';
import { SharedModule } from '../shared/shared.module';

/* components */

import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        CommonModule,
        PageUseModule,
        SharedModule,
        routing
    ],
    declarations: [
        PagesComponent
    ]
})
export class PagesModule {
}
