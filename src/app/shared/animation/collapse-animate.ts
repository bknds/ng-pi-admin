import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const collapse = [
    trigger('collapse', [
        state('off', style({ 'height': '0', 'padding': '0' })),
        state('on', style({ 'height': '*' })),
        transition('* => *', [animate('400ms cubic-bezier(.39,.8,.5,.95)')])
    ])
];
