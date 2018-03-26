import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './markdown.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

import { MarkdownComponent } from './markdown.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        MarkdownComponent
    ]
})
export class MarkdownModule { }
