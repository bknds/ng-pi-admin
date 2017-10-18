import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './form.routing';
import { InputsComponent } from './components/inputs/inputs.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        InputsComponent
    ]
})
export class FormModule { }
