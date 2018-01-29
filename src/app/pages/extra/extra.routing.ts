import { Routes, RouterModule } from '@angular/router';
import { ExtraComponent } from './extra.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ExtraComponent,
        children: [
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
