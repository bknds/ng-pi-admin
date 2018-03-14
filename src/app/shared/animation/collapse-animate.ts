import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

export const collapse = [
    trigger('collapse', [
        state('init', style({ height: 0 })),
        state('off', style({ height: 0 })),
        state('on', style({ height: '*' })),
        transition('* => on', [animate('400ms cubic-bezier(.39,.8,.5,.95)')]),
        transition('on => off', [animate('400ms cubic-bezier(.39,.8,.5,.95)')]),
        transition('init => off', [animate('0s')])
    ])
];
