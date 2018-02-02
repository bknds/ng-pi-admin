import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './mailbox.routing';
import { SharedModule } from '../../shared/shared.module';
import { MailboxComponent } from './mailbox.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        MailboxComponent
    ]
})
export class MailboxModule { }
