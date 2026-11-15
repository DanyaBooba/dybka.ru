import Box from '@mui/joy/Box'
import {
    ArrowClockwise,
    ArrowLeft,
    ArrowRight,
    Lock,
    Plus,
    ShareNetwork,
    Star,
    X,
} from '@phosphor-icons/react'

const schemes = {
    light: {
        border: 'rgba(22, 35, 27, .14)',
        shell: '#ffffff',
        chrome: '#e9e7e1',
        tab: '#f6f4ef',
        toolbar: '#f6f4ef',
        address: '#ffffff',
        text: 'rgba(22, 35, 27, .74)',
        icon: 'rgba(22, 35, 27, .46)',
        divider: 'rgba(22, 35, 27, .1)',
        shadow: '0 30px 90px rgba(28, 44, 33, .18), 0 2px 6px rgba(28, 44, 33, .08)',
    },
    dark: {
        border: 'rgba(255, 255, 255, .14)',
        shell: '#121614',
        chrome: '#191d1a',
        tab: '#232823',
        toolbar: '#232823',
        address: '#101311',
        text: 'rgba(244, 248, 243, .76)',
        icon: 'rgba(244, 248, 243, .46)',
        divider: 'rgba(255, 255, 255, .09)',
        shadow: '0 30px 90px rgba(0, 0, 0, .42)',
    },
}

const iconStyle = {
    display: 'inline-flex',
    flexShrink: 0,
}

export default function CaseBrowser({
    url = 'example.com',
    title = 'Новая вкладка',
    favicon,
    dark = false,
    children,
    viewportSx,
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
                    boxShadow: scheme.shadow,
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
                                px: '10px',
                                borderTopLeftRadius: '8px',
                                borderTopRightRadius: '8px',
                                bgcolor: scheme.tab,
                                color: scheme.text,
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '10.5px',
                                lineHeight: 1,
                            }}
                        >
                            <Box sx={{ display: 'inline-flex', flexShrink: 0 }}>{favicon}</Box>
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
                            <Box component="span" sx={{ ...iconStyle, ml: 'auto', opacity: 0.6 }}>
                                <X size={9} weight="bold" />
                            </Box>
                        </Box>

                        <Box
                            component="span"
                            sx={{ ...iconStyle, ml: { xs: 'auto', sm: 0 }, color: scheme.icon }}
                        >
                            <Plus size={13} weight="bold" />
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            alignItems: 'center',
                            gap: '10px',
                            height: '40px',
                            px: '14px',
                            borderBottom: '1px solid',
                            borderColor: scheme.divider,
                        }}
                    >
                        <Box component="span" sx={{ ...iconStyle, color: scheme.icon }}>
                            <ArrowLeft size={13} weight="bold" />
                        </Box>
                        <Box component="span" sx={{ ...iconStyle, color: scheme.icon, opacity: 0.5 }}>
                            <ArrowRight size={13} weight="bold" />
                        </Box>
                        <Box component="span" sx={{ ...iconStyle, color: scheme.icon }}>
                            <ArrowClockwise size={13} weight="bold" />
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '7px',
                                flex: 1,
                                minWidth: 0,
                                height: '26px',
                                px: '10px',
                                borderRadius: '7px',
                                bgcolor: scheme.address,
                                border: '1px solid',
                                borderColor: scheme.divider,
                                color: scheme.text,
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '10.5px',
                                lineHeight: 1,
                            }}
                        >
                            <Lock size={9} weight="fill" style={{ flexShrink: 0, opacity: 0.55 }} />
                            <Box
                                component="span"
                                sx={{
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {url}
                            </Box>
                        </Box>

                        <Box component="span" sx={{ ...iconStyle, color: scheme.icon }}>
                            <Star size={13} />
                        </Box>
                        <Box component="span" sx={{ ...iconStyle, color: scheme.icon }}>
                            <ShareNetwork size={13} />
                        </Box>
                    </Box>
                </Box>
            ) : null}

            <Box
                sx={[
                    {
                        position: 'relative',
                        overflow: 'hidden',
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
