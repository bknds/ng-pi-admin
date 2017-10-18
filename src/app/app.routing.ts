import { Routes, RouterModule } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { PagesComponent } from "./pages/pages.component";

const appChildRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: "index", component: IndexComponent },
    {
      path: '**', redirectTo: "index"
    }
  ];
  
  const appRoutes: Routes = [
    {
      path: '',
      component: PagesComponent
    },
    {
      path: 'pages',
      component: PagesComponent,
      children: appChildRoutes
    }
  ];

export const routing  = RouterModule.forRoot(appRoutes);