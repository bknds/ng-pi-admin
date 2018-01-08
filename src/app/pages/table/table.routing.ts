import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { SmartTablesComponent } from './components/smart-tables/smart-tables.component';

const childRoutes: Routes = [
    {
        path: '',
        component: TableComponent,
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'basic-tables', component: BasicTablesComponent },
            { path: 'smart-tables', component: SmartTablesComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);