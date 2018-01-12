import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const collapse = [
    trigger('collapse', [
        state('off', style({ 'height': '0' })),
        state('on', style({ 'height': '*' })),
        transition('* => *', [animate('200ms')])
    ])
]
