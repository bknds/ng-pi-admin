import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EditorComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
