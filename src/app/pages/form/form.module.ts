import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './form.routing';
import { SharedModule } from '../../shared/shared.module';

/* components */
import { FormComponent } from './form.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { TreesComponent } from './components/trees/trees.component';
import { AreaComponent } from './components/area/area.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        FormComponent,
        InputsComponent,
        TreesComponent,
        AreaComponent
    ]
})
export class FormModule { }
