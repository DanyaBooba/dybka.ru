import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'
import PamyatLogo from '../../components/pamyat-logo'
import ProjectScreenshots from '../../components/project-screenshots'
import { ArrowUpRight } from '@phosphor-icons/react'

const screenshots = [
    {
        light: '/img/pamyat/img-1.jpg',
        alt: 'Экран «Сегодня» приложения «Память новомучеников»',
    },
    {
        light: '/img/pamyat/img-2.jpg',
        alt: 'Календарь памяти в приложении «Память новомучеников»',
    },
    {
        light: '/img/pamyat/img-3.jpg',
        alt: 'Карта событий в приложении «Память новомучеников»',
    },
    {
        light: '/img/pamyat/img-4.jpg',
        alt: 'Поиск по биографиям в приложении «Память новомучеников»',
    },
    {
        light: '/img/pamyat/img-5.jpg',
        alt: 'Скриншот приложения «Память новомучеников»',
    },
]

const featureScreenshots = [
    {
        light: '/img/pages/pamyat/index@light.png',
        dark: '/img/pages/pamyat/index@dark.png',
        alt: 'Экран «Сегодня» приложения «Память новомучеников»',
    },
    {
        light: '/img/pages/pamyat/calendar@light.png',
        dark: '/img/pages/pamyat/calendar@dark.png',
        alt: 'Календарь памяти в приложении «Память новомучеников»',
    },
    {
        light: '/img/pages/pamyat/map@light.png',
        dark: '/img/pages/pamyat/map@dark.png',
        alt: 'Карта событий в приложении «Память новомучеников»',
    },
    {
        light: '/img/pages/pamyat/search@light.png',
        dark: '/img/pages/pamyat/search@dark.png',
        alt: 'Поиск по биографиям в приложении «Память новомучеников»',
    },
]

const linkSx = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    paddingTop: '4px',
    paddingBottom: '4px',
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

export default function PamyatAppProjectPage() {
    const theme = useTheme()

    return (
        <Box
            component="main"
            sx={{
                position: 'relative',
                zIndex: 1,
                px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                pt: 'clamp(40px, 16vw, 140px)',
                pb: 'clamp(80px, 12vw, 160px)',
            }}
        >
            <Box sx={{ maxWidth: '1600px', mx: 'auto' }}>

                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: { xs: '12px 24px', md: '12px 28px' },
                    mt: { xs: '16px', md: '24px' },
                    mb: { xs: 'clamp(40px, 10vw, 56px)', md: 'clamp(72px, 8vw, 88px)' },
                    justifyContent: 'center'
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

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 'clamp(12px, 2.5vw, 24px)',
                    justifyContent: 'center',
                }}>
                    <PamyatLogo
                        style={{
                            display: 'block',
                            width: 'clamp(44px, 5.5vw, 88px)',
                            height: 'auto',
                            flexShrink: 0,
                        }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
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
                                textAlign: 'center',
                                mb: 2
                            }}
                        >
                            Память новомучеников
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                fontSize: 'clamp(12px, 1vw, 24px)',
                                textAlign: 'center',
                                m: 0
                            }}
                        >
                            Святые дня, биографии и карта событий
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ py: { xs: 'clamp(40px, 10vw, 56px)', md: 'clamp(56px, 6vw, 96px)' } }}>
                    <Box
                        component="p"
                        sx={{
                            m: 0,
                            maxWidth: '34ch',
                            fontFamily: "'Inter', Georgia, serif",
                            fontSize: 'clamp(20px, 2.8vw, 32px)',
                            fontWeight: 500,
                            lineHeight: 1.15,
                            letterSpacing: '-0.02em',
                            color: theme.vars.palette.pamyat.titleColor,
                            textWrap: 'balance',
                            mb: { xs: '32px', md: '64px' }
                        }}
                    >
                        Приложение отображает сведения о новомучениках из базы данных «За Христа пострадавшие».
                    </Box>
                    <Box
                        component="p"
                        sx={{
                            m: 0,
                            maxWidth: '34ch',
                            fontFamily: "'Inter', Georgia, serif",
                            fontSize: 'clamp(20px, 2.8vw, 32px)',
                            fontWeight: 500,
                            lineHeight: 1.15,
                            letterSpacing: '-0.02em',
                            color: theme.vars.palette.pamyat.titleColor,
                            textWrap: 'balance',
                        }}
                    >
                        Более 20 000 дел <nobr>с ссылками</nobr> <nobr>на источники</nobr> <nobr>и событиями</nobr> <nobr>на карте</nobr>.
                    </Box>
                </Box>

                {/* <Box
                    component="h2"
                    sx={{
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(24px, 3.2vw, 32px)',
                        fontWeight: 700,
                        color: theme.vars.palette.pamyat.titleColor,
                        m: 0,
                        lineHeight: 'normal',
                        mb: { xs: '24px', md: '32px' },
                    }}
                >
                    Новомученики поминаемые на текущий день
                </Box> */}
                <ProjectScreenshots
                    items={[featureScreenshots[0]]}
                    layout="wide"
                    sx={{ mb: { xs: '16px', md: '24px' } }}
                />

                {/* <Box
                    component="h2"
                    sx={{
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(24px, 3.2vw, 32px)',
                        fontWeight: 700,
                        color: theme.vars.palette.pamyat.titleColor,
                        m: 0,
                        lineHeight: 'normal',
                        mb: { xs: '24px', md: '32px' },
                    }}
                >
                    Календарь памяти
                </Box> */}
                <ProjectScreenshots
                    items={[featureScreenshots[1]]}
                    layout="wide"
                    sx={{ mb: { xs: '16px', md: '24px' } }}
                />

                {/* <Box
                    component="h2"
                    sx={{
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(24px, 3.2vw, 32px)',
                        fontWeight: 700,
                        color: theme.vars.palette.pamyat.titleColor,
                        m: 0,
                        lineHeight: 'normal',
                        mb: { xs: '24px', md: '32px' },
                    }}
                >
                    Карта событий
                </Box> */}
                <ProjectScreenshots
                    items={[featureScreenshots[2]]}
                    layout="wide"
                    sx={{ mb: { xs: '16px', md: '24px' } }}
                />

                {/* <Box
                    component="h2"
                    sx={{
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(24px, 3.2vw, 32px)',
                        color: theme.vars.palette.pamyat.titleColor,
                        m: 0,
                        lineHeight: 'normal',
                        mb: { xs: '24px', md: '32px' },
                    }}
                >
                    Поиск по биографиям
                </Box> */}
                <ProjectScreenshots
                    items={[featureScreenshots[3]]}
                    layout="wide"
                    sx={{ mb: { xs: '16px', md: '24px' } }}
                />

                <Box
                    component="h2"
                    sx={{
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(24px, 3.2vw, 32px)',
                        fontWeight: 700,
                        color: theme.vars.palette.pamyat.titleColor,
                        m: 0,
                        lineHeight: 'normal',
                        mt: { xs: 'clamp(32px, 8vw, 48px)', md: 'clamp(48px, 6vw, 64px)' },
                        mb: { xs: '24px', md: '32px' },
                    }}
                >
                    Скриншоты приложения
                </Box>

                <ProjectScreenshots
                    items={screenshots}
                    layout="row"
                    aspectRatio="1206 / 2622"
                    sx={{ mb: { xs: 'clamp(48px, 10vw, 72px)', md: 'clamp(64px, 8vw, 96px)' } }}
                />

                <Box
                    component="h2"
                    sx={{
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(24px, 3.2vw, 32px)',
                        fontWeight: 700,
                        color: theme.vars.palette.pamyat.titleColor,
                        m: 0,
                        lineHeight: 'normal',
                        mb: { xs: '24px', md: '32px' },
                    }}
                >
                    Доступно для скачивания
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'flex-start', sm: 'center' },
                    flexWrap: 'wrap',
                    gap: { xs: '18px', md: '32px' },
                }}>
                    <Box
                        component="a"
                        href="https://map.dybka.ru"
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            ...linkSx,
                            fontSize: { xs: '14px', md: '16px' },
                            '&:hover .pamyat-arrow': {
                                transform: 'translate(4px, -4px)',
                            },
                        }}
                    >
                        Открыть проект
                        <ArrowUpRight
                            className="pamyat-arrow"
                            size={24}
                            weight="light"
                            aria-hidden="true"
                            style={{
                                transition: 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                        />
                    </Box>
                    <Box
                        component="a"
                        href="https://apps.apple.com/us/app/%D0%BF%D0%B0%D0%BC%D1%8F%D1%82%D1%8C-%D0%BD%D0%BE%D0%B2%D0%BE%D0%BC%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2/id6823608592"
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            ...linkSx,
                            fontSize: { xs: '14px', md: '16px' },
                            '&:hover .pamyat-arrow': {
                                transform: 'translate(4px, -4px)',
                            },
                        }}
                    >
                        App Store
                        <ArrowUpRight
                            className="pamyat-arrow"
                            size={24}
                            weight="light"
                            aria-hidden="true"
                            style={{
                                transition: 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                        />
                    </Box>
                    <Box
                        component="a"
                        href="https://www.rustore.ru/catalog/app/com.dybka.pamyat_novomuchenikov"
                        target="_blank"
                        rel="noreferrer"
                        sx={{
                            ...linkSx,
                            fontSize: { xs: '14px', md: '16px' },
                            '&:hover .pamyat-arrow': {
                                transform: 'translate(4px, -4px)',
                            },
                        }}
                    >
                        RuStore
                        <ArrowUpRight
                            className="pamyat-arrow"
                            size={24}
                            weight="light"
                            aria-hidden="true"
                            style={{
                                transition: 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)',
                            }}
                        />
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
