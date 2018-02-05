import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './form.routing';
import { SharedModule } from '../../shared/shared.module';

/* components */
import { FormComponent } from './form.component';
import { FormInputsComponent } from './components/form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './components/form-layouts/form-layouts.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        FormComponent,
        FormInputsComponent,
        FormLayoutsComponent
    ]
})
export class FormModule { }
