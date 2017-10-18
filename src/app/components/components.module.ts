import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MenuComponent
    ],
    exports:[
        MenuComponent
    ]
})
export class ComponentsModule {
}
