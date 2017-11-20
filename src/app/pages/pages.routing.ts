import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PagesComponent } from './pages.component';

export const childRoutes: Routes = [
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full' },
            { path: 'index', component: IndexComponent },
            { path: 'form', loadChildren:'./form/form.module#FormModule'},
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);