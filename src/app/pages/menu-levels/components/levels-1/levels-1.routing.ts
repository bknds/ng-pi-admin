import { Routes, RouterModule } from '@angular/router';
import { Levels1Component } from './levels-1.component';
import { Levels11Component } from './components/levels-1-1/levels-1-1.component';

const childRoutes: Routes = [
    {
        path: '',
        component: Levels1Component,
        children: [
            { path: '', redirectTo: 'levels1-1', pathMatch: 'full' },
            { path: 'levels1-1', component: Levels11Component },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);