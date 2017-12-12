import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './ui.routing';
import { SharedModule } from '../../shared/shared.module';
/* components */
import { UiComponent } from './ui.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        UiComponent,
        ButtonsComponent,
        TabsComponent
    ]
})
export class UIModule { }
