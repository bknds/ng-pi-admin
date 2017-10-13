import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages.component'
import { IndexComponent } from './index/index.component';

export const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: 'index', loadChildren:IndexComponent},
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);

