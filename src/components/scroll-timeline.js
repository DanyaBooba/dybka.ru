// CSS scroll-driven анимации: Chrome 115+, Safari 26+, Firefox 159+.
// Если браузер не умеет — компоненты переключаются на JS-фолбэк.
export const supportsScrollTimeline =
    typeof CSS !== 'undefined' &&
    typeof CSS.supports === 'function' &&
    CSS.supports('animation-timeline', 'view()') &&
    CSS.supports('animation-range', 'contain 0% contain 100%')
