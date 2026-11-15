export const DEFAULT_IMAGE_POSITION = {
    mobile: '50% 32%',
    tablet: '50% 36%',
    desktop: '50% 38%',
}

// Optional per-event override in events.js:
// position: { mobile: '40% 32%', tablet: '50% 36%', desktop: '50% 38%' }
export function imagePositionSx(position) {
    const resolved = { ...DEFAULT_IMAGE_POSITION, ...position }

    return {
        xs: resolved.mobile,
        sm: resolved.tablet,
        md: resolved.desktop,
    }
}
