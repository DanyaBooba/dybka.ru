import Box from '@mui/joy/Box'

const schemes = {
    light: {
        border: 'rgba(0, 0, 0, .14)',
        shell: '#ffffff',
        chrome: '#e4e4e4',
        tab: '#efefef',
        toolbar: '#efefef',
        address: '#fafafa',
        text: 'rgba(0, 0, 0, .74)',
        icon: 'rgba(0, 0, 0, .46)',
        divider: 'rgba(0, 0, 0, .1)',
        shadow: '0 30px 90px rgba(0, 0, 0, .16), 0 2px 6px rgba(0, 0, 0, .06)',
    },
    dark: {
        border: 'rgba(255, 255, 255, .14)',
        shell: '#121212',
        chrome: '#1a1a1a',
        tab: '#242424',
        toolbar: '#242424',
        address: '#0f0f0f',
        text: 'rgba(244, 244, 244, .76)',
        icon: 'rgba(244, 244, 244, .46)',
        divider: 'rgba(255, 255, 255, .09)',
        shadow: '0 30px 90px rgba(0, 0, 0, .42)',
    },
}

export default function CaseBrowser({
    title = 'Новая вкладка',
    dark = false,
    shadow = true,
    children,
    viewportSx,
    viewportRef,
    sx,
    topBar = true,
}) {
    const scheme = dark ? schemes.dark : schemes.light

    return (
        <Box
            sx={[
                {
                    overflow: 'hidden',
                    borderRadius: { xs: '12px', md: '16px' },
                    border: '1px solid',
                    borderColor: scheme.border,
                    bgcolor: scheme.shell,
                    boxShadow: shadow ? scheme.shadow : 'none',
                    isolation: 'isolate',
                },
                ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
            ]}
        >
            {topBar ? (
                <Box aria-hidden="true" sx={{ bgcolor: scheme.chrome }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            height: { xs: '34px', md: '38px' },
                            px: '12px',
                            borderBottom: '1px solid',
                            borderColor: scheme.divider,
                        }}
                    >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                            {['#ff5f57', '#febc2e', '#28c840'].map((color) => (
                                <Box
                                    key={color}
                                    sx={{
                                        width: { xs: '8px', md: '9px' },
                                        height: { xs: '8px', md: '9px' },
                                        borderRadius: '50%',
                                        bgcolor: color,
                                    }}
                                />
                            ))}
                        </Box>

                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                alignItems: 'center',
                                gap: '7px',
                                minWidth: 0,
                                maxWidth: '280px',
                                height: '26px',
                                ml: '6px',
                                px: '12px',
                                borderRadius: '999px',
                                fontWeight: 500,
                                bgcolor: scheme.tab,
                                color: scheme.text,
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '14px',
                                lineHeight: 1,
                                mx: 'auto'
                            }}
                        >
                            <Box
                                component="span"
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {title}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ) : null}

            <Box
                ref={viewportRef}
                sx={[
                    {
                        position: 'relative',
                        overflow: 'hidden',
                        // Своя композиторская прослойка: окно с обрезанным
                        // превью не перерисовывает страницу при скролле.
                        contain: 'paint',
                        transform: 'translateZ(0)',
                        bgcolor: scheme.shell,
                    },
                    ...(viewportSx ? (Array.isArray(viewportSx) ? viewportSx : [viewportSx]) : []),
                ]}
            >
                {children}
            </Box>
        </Box>
    )
}
