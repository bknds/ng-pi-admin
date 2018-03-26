import { Routes, RouterModule } from '@angular/router';
import { MarkdownComponent } from './markdown.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MarkdownComponent,
        children: [
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
