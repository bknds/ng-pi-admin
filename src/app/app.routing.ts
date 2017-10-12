import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component'

const appRoutes: Routes = [
    { path: '', component: PagesComponent },
    { path: '**', component: PagesComponent }
];

export const routing = RouterModule.forRoot(appRoutes);