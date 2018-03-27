import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const childRoutes: Routes = [
    {
        path: '',
        component: TableComponent,
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'basic-tables', component: BasicTablesComponent },
            { path: 'data-table', component: DataTableComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
