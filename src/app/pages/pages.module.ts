import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';

const PagesRoutes:Routes = [
    {
        path:'',
        component:IndexComponent
    },
    {
        path:'index',
        component:IndexComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(PagesRoutes),
    ],
})
export class PagesModule {
}
