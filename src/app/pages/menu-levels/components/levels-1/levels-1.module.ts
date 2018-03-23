import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './levels-1.routing';

/* components */
import { Levels1Component } from './levels-1.component';
import { Levels11Component } from './components/levels-1-1/levels-1-1.component';

@NgModule({
    imports: [
        CommonModule,
        routing
    ],
    declarations: [
        Levels1Component,
        Levels11Component,
    ]
})
export class Levels1Module { }
