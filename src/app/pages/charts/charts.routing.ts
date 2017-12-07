import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { DefaultChartsComponent } from './components/default-charts/default-charts.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ChartsComponent,
        children: [
            { path: '', redirectTo: 'default-charts', pathMatch: 'full' },
            { path: 'default-charts', component: DefaultChartsComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);