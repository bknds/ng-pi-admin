import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './editor.routing';
import { SharedModule } from '../../shared/shared.module';
import { CKEditorModule } from 'ngx-ckeditor';
import { EditorComponent } from './editor.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        CKEditorModule,
        routing
    ],
    declarations: [
        EditorComponent
    ]
})
export class EditorModule { }