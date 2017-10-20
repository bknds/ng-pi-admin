import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';
import { FormModule } from './form/form.module';
import { ElModule } from 'element-angular';
import 'element-theme-default';

@NgModule({
    imports: [
        CommonModule,
        ComponentsModule,
        FormModule,
        ElModule.forRoot(),
        routing
    ],
    declarations: [
        PagesComponent,
        IndexComponent,
        FormComponent
    ]
})
export class PagesModule {
}
