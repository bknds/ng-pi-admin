import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './table.routing';
/* components */
import { TableComponent } from './table.component';
import { DefaultTablesComponent } from './components/default-tables/default-tables.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        TableComponent,
        DefaultTablesComponent
    ]
})
export class TableModule { }
