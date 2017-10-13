import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages/pages.component';

const routes:Routes = [
    {
        path: '',
        component: PagesComponent,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}