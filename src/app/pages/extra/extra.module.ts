import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './extra.routing';
import { SharedModule } from '../../shared/shared.module';
import { ExtraComponent } from './extra.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        ExtraComponent
    ]
})
export class ExtraModule { }
