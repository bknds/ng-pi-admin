import { IndexComponent } from "./index/index.component";
import { Routes, RouterModule } from "@angular/router";

const appRoutes:Routes = [
    {
        path:'',
        component:IndexComponent
    }
];

export const routing  = RouterModule.forRoot(appRoutes);