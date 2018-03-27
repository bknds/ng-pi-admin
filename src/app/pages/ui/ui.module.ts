import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './ui.routing';
import { SharedModule } from '../../shared/shared.module';
import { ModalModule } from 'ngx-modal';

/* components */
import { UiComponent } from './ui.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { GridComponent } from './components/grid/grid.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { ModalsComponent } from './components/modals/modals.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        ModalModule,
        routing
    ],
    declarations: [
        UiComponent,
        ButtonsComponent,
        TabsComponent,
        GridComponent,
        NotificationComponent,
        FileTreeComponent,
        LoadingComponent,
        ProgressBarComponent,
        ModalsComponent
    ]
})
export class UIModule { }
