import { Routes, RouterModule } from '@angular/router';
import { MailboxComponent } from './mailbox.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MailboxComponent,
        children: [
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
