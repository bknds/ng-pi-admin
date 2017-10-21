import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { IndexComponent } from './index/index.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { ElModule } from 'element-angular';
import 'element-theme-default';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        ElModule.forRoot(),
        routing
    ],
    declarations: [
        PagesComponent,
        IndexComponent
    ]
})
export class PagesModule {
}
