import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './charts.routing';
import { NgxEchartsModule } from 'ngx-echarts';

/* components */
import { ChartsComponent } from './charts.component';
import { DefaultChartsComponent } from './components/default-charts/default-charts.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing
    ],
    declarations: [
        ChartsComponent,
        DefaultChartsComponent
    ]
})
export class ChartsModule { }
