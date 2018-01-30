import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './icon.routing';
import { SharedModule } from '../../shared/shared.module';
import { IconComponent } from './icon.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        IconComponent
    ]
})
export class IconModule { }
