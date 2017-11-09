import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const collapse = [
    trigger('collapse', [
        state('off', style({ 'height': '40px' })),
        state('on', style({ 'height': '*' })),
        transition('* => *', [animate('300ms')])
    ])
]
