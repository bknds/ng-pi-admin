import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { InputsComponent } from './components/inputs/inputs.component';

export const childRoutes: Routes = [
    {
        path: 'form',
        component: FormComponent,
        children: [
            { path: 'inputs', component: InputsComponent },
        ]
    },
];

export const routing = RouterModule.forChild(childRoutes);