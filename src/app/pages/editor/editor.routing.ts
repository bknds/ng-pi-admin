import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EditorComponent,
        children: [
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
