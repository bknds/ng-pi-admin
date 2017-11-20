import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './ui.routing';
/* components */
import { UiComponent } from './ui.component';
import { ButtonsComponent } from './components/buttons/buttons.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        UiComponent,
        ButtonsComponent
    ]
})
export class UIModule { }
