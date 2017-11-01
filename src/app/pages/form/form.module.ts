import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './form.routing';
/* components */
import { InputsComponent } from './components/inputs/inputs.component';
import { FormComponent } from './form.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        FormComponent,
        InputsComponent
    ]
})
export class FormModule { }
