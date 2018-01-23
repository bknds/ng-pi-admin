import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';

import { SkeletonModule } from '../shared/skeleton.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { PagesComponent } from './pages.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports: [
        CommonModule,
        SkeletonModule,
        SharedModule,
        routing
    ],
    declarations: [
        PagesComponent,
        LoginComponent
    ]
})
export class PagesModule { }