import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { SkeletonModule } from '../shared/skeleton.module';
import { SharedModule } from '../shared/shared.module';

/* components */

import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        CommonModule,
        SkeletonModule,
        SharedModule,
        routing
    ],
    declarations: [
        PagesComponent
    ]
})
export class PagesModule {
}
