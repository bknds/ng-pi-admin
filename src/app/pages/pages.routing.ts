import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { IndexComponent } from './index/index.component'

export const routes: Routes = [
  {
    path: 'index',
    loadChildren: 'app/pages/index/index.module#IndexModule'
  },

  {
    path: 'pages',
    component: IndexComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      { path: 'index', loadChildren:'./index/index.module#IndexModule'},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
