import { Routes, RouterModule } from '@angular/router';
import { UiComponent } from './ui.component';

/* children components */
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { GridComponent } from './components/grid/grid.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ModalsComponent } from './components/modals/modals.component';

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
            { path: 'file-tree', component: FileTreeComponent },
            { path: 'progress-bar', component: ProgressBarComponent },
            { path: 'loading', component: LoadingComponent },
            { path: 'modals', component: ModalsComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
