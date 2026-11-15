import { Box, useTheme } from "@mui/joy";
import { ArrowUpRight } from "@phosphor-icons/react";
import PamyatLogo from "./pamyat-logo"
import ProjectScreenshots from "./project-screenshots";

const screenshots = [
    '/img/pamyat/img-1.jpg',
    '/img/pamyat/img-2.jpg',
    '/img/pamyat/img-3.jpg',
    '/img/pamyat/img-4.jpg',
    '/img/pamyat/img-5.jpg',
]

const linkSx = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    color: 'inherit',
    fontFamily: 'var(--joy-fontFamily-body)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'opacity .25s ease',
    '&:hover': { opacity: 0.55 },
}

export default function PamyatNovomuchenikov() {
    const theme = useTheme()
    return (
        <Box
            component="section"
            id="pamyat"
            aria-labelledby="pamyat-title"
            sx={{
                position: 'relative',
                zIndex: 1,
                px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
            }}
        >
            <Box sx={{ maxWidth: '1600px', mx: 'auto', py: 8 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 'clamp(16px, 2.5vw, 32px)',
                }}>
                    <PamyatLogo
                        style={{
                            display: 'block',
                            width: 'clamp(44px, 5.5vw, 88px)',
                            height: 'auto',
                            flexShrink: 0,
                        }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box
                            component="h2"
                            id="pamyat-title"
                            sx={{
                                fontFamily: "'Inter', Georgia, serif",
                                fontSize: 'clamp(24px, 3.2vw, 48px)',
                                fontWeight: 700,
                                color: theme.vars.palette.pamyat.titleColor,
                                m: 0,
                                lineHeight: 'normal',
                                // mb: 'clamp(4px, 0.75vw, 16px)',
                            }}
                        >
                            Память новомучеников
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                fontSize: 'clamp(12px, 1vw, 24px)',
                                m: 0
                            }}
                        >
                            Святые дня, биографии и карта событий
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '12px 28px',
                    mt: '28px',
                }}>
                    <Box
                        component="a"
                        href="https://map.dybka.ru"
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            ...linkSx,
                            '&:hover .pamyat-arrow': {
                                transform: 'translate(4px, -4px)',
                            },
                        }}
                    >
                        Открыть проект
                        <ArrowUpRight
                            className="pamyat-arrow"
                            size={16}
                            weight="light"
                            aria-hidden="true"
                            style={{
                                transition: 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                        />
                    </Box>
                    <Box
                        component="a"
                        href="https://map.dybka.ru/apps"
                        target="_blank"
                        rel="noreferrer"
                        sx={linkSx}
                    >
                        Мобильные приложения
                    </Box>
                </Box>

                <ProjectScreenshots
                    items={screenshots}
                    layout="row"
                    aspectRatio="1206 / 2622"
                    altPrefix="Скриншот приложения «Память новомучеников»"
                    sx={{ mt: { xs: '32px', md: '48px' } }}
                />
            </Box>
        </Box>
    )
}
