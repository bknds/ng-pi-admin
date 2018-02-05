import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { FormInputsComponent } from './components/form-inputs/form-inputs.component';
import { FormLayoutsComponent } from './components/form-layouts/form-layouts.component';

const childRoutes: Routes = [
    {
        path: '',
        component: FormComponent,
        children: [
            { path: '', redirectTo: 'inputs', pathMatch: 'full' },
            { path: 'form-inputs', component: FormInputsComponent },
            { path: 'form-layouts', component: FormLayoutsComponent }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);