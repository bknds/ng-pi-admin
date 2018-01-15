import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './table.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from "ngx-pagination";

/* components */
import { TableComponent } from './table.component';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { SmartTablesComponent } from './components/smart-tables/smart-tables.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        SharedModule,
        routing
    ],
    declarations: [
        TableComponent,
        BasicTablesComponent,
        SmartTablesComponent
    ]
})
export class TableModule { }
