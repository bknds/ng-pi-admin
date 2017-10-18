import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { PagesComponent } from './pages.component';

@NgModule({
    imports: [
        CommonModule,
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
