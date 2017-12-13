import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { TreesComponent } from './components/trees/trees.component';
import { AreaComponent } from './components/area/area.component';

const childRoutes: Routes = [
    {
        path: '',
        component: FormComponent,
        children: [
            { path: '', redirectTo: 'inputs', pathMatch: 'full' },
            { path: 'inputs', component: InputsComponent },
            { path: 'trees', component: TreesComponent },
            { path: 'area', component: AreaComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);