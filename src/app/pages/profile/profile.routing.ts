import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
