//sim-anim.ts

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// 动画时间线
var time = '300ms'
var styles = {
    ease: time + ' ease ',
    linear: time + ' linear ',
    easeIn: time + ' ease-in',
    easeOut: time + ' ease-out',
    stepStart: time + ' step-start',
    stepEnd: time + ' step-end',
    easeInOut: time + ' ease-in-out',
    faseOutSlowIn: time + ' cubic-bezier(0.4, 0, 0.2, 1)',
    inOutBack: time + ' cubic-bezier(0.68, -0.55, 0.27, 1.55)',
    inOutCubic: time + ' cubic-bezier(0.65, 0.05, 0.36, 1)',
    inOutQuadratic: time + ' cubic-bezier(0.46, 0.03, 0.52, 0.96)',
    inOutSine: time + ' cubic-bezier(0.45, 0.05, 0.55, 0.95)'
}

// 动画配置

var opts = {
    fadeIn: [
        style({ opacity: 0 }),
        animate(styles.inOutBack, style({ opacity: 1 })),
    ],
    fadeOut: [
        style({ opacity: 1 }),
        animate(styles.inOutBack, style({ opacity: 0 }))
    ],
    shrink: [
        style({ height: '*' }),
        animate(styles.inOutBack, style({ height: 0 }))
    ],
    stretch: [
        style({ height: '0' }),
        animate(styles.inOutBack, style({ height: '*' }))
    ],
    flyIn: [
        style({ transform: 'translateX(-100%)' }),
        animate(styles.inOutBack, style({ transform: '*' }))
    ],
    flyOut: [
        style({ transform: '*' }),
        animate(styles.inOutBack, style({ transform: 'translateX(-100%)' }))
    ],
    zoomIn: [
        style({ transform: 'scale(.5)' }),
        animate(styles.inOutBack, style({ transform: '*' }))
    ],
    zoomOut: [
        style({ transform: '*' }),
        animate(styles.inOutBack, style({ transform: 'scale(.5)' }))
    ]
}

// 导出动画时间线定义,供自定义动画的时候使用
export const animStyle = styles

// 导出动画
export const fadeIn = [trigger('fadeIn', [transition('void => *', opts.fadeIn)])]
export const fadeOut = [trigger('fadeOut', [transition('* => void', opts.fadeOut)])]
export const stretch = [trigger('stretch', [transition('void => *', opts.stretch)])]
export const shrink = [trigger('shrink', [transition('* => void', opts.shrink)])]
export const flyIn = [trigger('flyIn', [transition('void => *', opts.flyIn)])]
export const flyOut = [trigger('flyOut', [transition('* => void', opts.flyOut)])]
export const zoomIn = [trigger('zoomIn', [transition('void => *', opts.zoomIn)])]
export const zoomOut = [trigger('zoomOut', [transition('* => void', opts.zoomOut)])]

export const simAnim = [
    trigger('simAnim', [
        transition('* => fadeIn', opts.fadeIn),
        transition('* => fadeIn', opts.fadeOut),
        transition('* => shrink', opts.shrink),
        transition('* => stretch', opts.stretch),
        transition('* => flyIn', opts.flyIn),
        transition('* => flyOut', opts.flyOut),
        transition('* => zoomIn', opts.zoomIn),
        transition('* => zoomOut', opts.zoomOut)
    ])
]
