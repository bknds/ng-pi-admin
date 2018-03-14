import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './form.routing';
import { SharedModule } from '../../shared/shared.module';
import { FileUploadModule } from 'ng2-file-upload';

/* components */
import { FormComponent } from './form.component';
import { FormInputsComponent } from './components/form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './components/form-layouts/form-layouts.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        FileUploadModule,
        routing
    ],
    declarations: [
        FormComponent,
        FormInputsComponent,
        FormLayoutsComponent,
        FileUploadComponent
    ]
})
export class FormModule { }
