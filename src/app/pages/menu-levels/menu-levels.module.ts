import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './menu-levels.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

/* components */
import { MenuLevelsComponent } from './menu-levels.component';
import { Levels2Component } from './components/levels-2/levels-2.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        MenuLevelsComponent,
        Levels2Component
    ]
})
export class MenuLevelsModule { }
