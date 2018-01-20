import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';

/* children components */
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { GridComponent } from './components/grid/grid.component';
import { NotificationComponent } from './components/notification/notification.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UiComponent,
        children: [
            { path: '', redirectTo: 'buttons', pathMatch: 'full' },
            { path: 'buttons', component: ButtonsComponent },
            { path: 'tabs', component: TabsComponent },
            { path: 'grid', component: GridComponent },
            { path: 'notification', component: NotificationComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
