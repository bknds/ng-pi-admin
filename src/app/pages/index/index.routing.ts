import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {IndexComponent} from "./index.component";

export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  }
];
export const routing:ModuleWithProviders=RouterModule.forChild(routes);
