import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
/* components */
import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        PagesComponent
]
})
export class PagesModule {
}
