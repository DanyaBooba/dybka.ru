import Box from '@mui/joy/Box'
import { useColorScheme, useTheme } from '@mui/joy/styles'
import { technologyGroups } from '../data/technologies'

export default function Technologies() {
    const theme = useTheme()
    const palette = theme.vars.palette
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const iconSx = {
        display: 'block',
        width: 'clamp(20px, 1.8vw, 24px)',
        height: 'clamp(20px, 1.8vw, 24px)',
        flexShrink: 0,
    }

    return (
        <Box
            component="section"
            aria-label="Технологии"
            sx={{
                position: 'relative',
                zIndex: 1,
                px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                py: 'clamp(64px, 10vw, 120px)',
            }}
        >
            <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
                {technologyGroups.map((group, groupIndex) => (
                    <Box
                        key={group.title}
                        sx={{ mt: groupIndex ? 'clamp(40px, 6vw, 72px)' : 0 }}
                    >
                        <Box
                            component="h2"
                            sx={{
                                m: 0,
                                mb: 'clamp(20px, 2.5vw, 28px)',
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(24px, 3vw, 32px)',
                                fontWeight: 400,
                                lineHeight: 1.05,
                                letterSpacing: '-0.03em',
                                color: palette.about.titleColor,
                            }}
                        >
                            {group.title}
                        </Box>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: group.columns,
                                columnGap: { xs: '24px', md: '48px' },
                                rowGap: 0,
                            }}
                        >
                            {group.items.map((item) => (
                                <Box
                                    key={item.name}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'stretch',
                                        gap: '12px',
                                    }}
                                >
                                    {item.light || item.dark ? (
                                        <Box
                                            component="img"
                                            src={dark ? (item.dark ?? item.light) : (item.light ?? item.dark)}
                                            alt=""
                                            aria-hidden="true"
                                            sx={{
                                                ...iconSx,
                                                alignSelf: 'center',
                                                objectFit: 'contain',
                                            }}
                                        />
                                    ) : (
                                        <Box
                                            component="span"
                                            aria-hidden="true"
                                            sx={{
                                                ...iconSx,
                                                alignSelf: 'center',
                                                bgcolor: palette.about.titleColor,
                                                maskImage: `url(${item.icon})`,
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                maskPosition: 'center',
                                                WebkitMaskImage: `url(${item.icon})`,
                                                WebkitMaskSize: 'contain',
                                                WebkitMaskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center',
                                            }}
                                        />
                                    )}
                                    <Box
                                        component="span"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            flex: 1,
                                            minWidth: 0,
                                            py: 'clamp(10px, 1.2vw, 14px)',
                                            borderBottom: '1px solid',
                                            borderColor: palette.divider,
                                            fontFamily: 'var(--joy-fontFamily-body)',
                                            fontSize: 'clamp(14px, 1.1vw, 16px)',
                                            fontWeight: 500,
                                            lineHeight: 1.2,
                                            color: palette.text.primary,
                                        }}
                                    >
                                        {item.name}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
