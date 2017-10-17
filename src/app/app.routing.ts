import { PagesComponent } from "./pages/pages.component";
import { Routes, RouterModule } from "@angular/router";

const appRoutes:Routes = [
    {
        path:'',
        component:PagesComponent
    }
];

export const routing  = RouterModule.forRoot(appRoutes);