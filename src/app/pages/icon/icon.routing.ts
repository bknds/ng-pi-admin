import { Routes, RouterModule } from '@angular/router';
import { IconComponent } from './icon.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IconComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
