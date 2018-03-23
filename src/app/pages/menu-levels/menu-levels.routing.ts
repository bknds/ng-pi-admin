import { Routes, RouterModule } from '@angular/router';
import { MenuLevelsComponent } from './menu-levels.component';
import { Levels2Component } from './components/levels-2/levels-2.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MenuLevelsComponent,
        children: [
            { path: '', redirectTo: 'levels1', pathMatch: 'full' },
            { path: 'levels1', loadChildren: './components/levels-1/levels-1.module#Levels1Module' },
            { path: 'levels2', component: Levels2Component },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);