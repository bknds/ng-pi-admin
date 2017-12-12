import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TabsComponent } from './components/tabs/tabs.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UiComponent,
        children: [
            { path: '', redirectTo: 'buttons', pathMatch: 'full' },
            { path: 'buttons', component: ButtonsComponent },
            { path: 'tabs', component: TabsComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
