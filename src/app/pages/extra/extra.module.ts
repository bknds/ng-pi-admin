import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './extra.routing';
import { SharedModule } from '../../shared/shared.module';
import { ExtraComponent } from './extra.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        ExtraComponent
    ]
})
export class ExtraModule { }
