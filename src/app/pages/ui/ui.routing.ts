import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UiComponent,
        children: [
            { path: '', redirectTo: 'buttons', pathMatch: 'full' },
            { path: 'buttons', component: ButtonsComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
