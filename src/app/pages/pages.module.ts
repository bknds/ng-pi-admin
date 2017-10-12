import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { Pages } from './pages.component';
@NgModule({
    imports: [CommonModule, routing],
    declarations: [Pages],
})
export class PagesModule {
}
