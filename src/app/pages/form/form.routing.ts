import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { InputsComponent } from './components/inputs/inputs.component';

const childRoutes: Routes = [
    {
        path: '',
        component: FormComponent,
        children: [
            { path: '', redirectTo: 'inputs', pathMatch: 'full' },
            { path: 'inputs', component: InputsComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);