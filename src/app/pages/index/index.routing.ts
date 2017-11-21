import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IndexComponent,
        children: [
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
