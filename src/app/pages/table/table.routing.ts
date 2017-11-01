import { Routes, RouterModule } from '@angular/router';
import { DefaultTablesComponent } from './components/default-tables/default-tables.component';
import { TableComponent } from './table.component';

const childRoutes: Routes = [
    {
        path: '',
        component: TableComponent,
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'default-tables', component: DefaultTablesComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);