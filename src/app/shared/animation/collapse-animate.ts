import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const collapse = [
    trigger('collapse', [
        state('off', style({ 'height': '0px' })),
        state('on', style({ 'height': '*' })),
        transition('* => *', [animate('300ms')])
    ])
]
