import { useEffect } from 'react'
import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight } from '@phosphor-icons/react'
import Header from '../components/header'
import Seo from '../components/seo'

const linkSx = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '9px',
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

const arrowTransition = 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)'

export default function PageNotFound() {
    const theme = useTheme()
    const palette = theme.vars.palette

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Seo
                title="Страница не найдена — Даниил Дыбка"
                description="Такой страницы нет: возможно, ссылка устарела или адрес набран с ошибкой."
                keywords="404, страница не найдена, Даниил Дыбка"
                path="/"
                noindex
            />
            <Header />

            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '100svh',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    py: { xs: 'clamp(96px, 16vw, 140px)', md: 'clamp(120px, 14vw, 200px)' },
                }}
            >
                <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Box
                            aria-hidden="true"
                            sx={{
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(5rem, 18vw, 14rem)',
                                fontWeight: 400,
                                lineHeight: 0.8,
                                letterSpacing: '-0.06em',
                                color: palette.about.titleColor,
                            }}
                        >
                            404
                        </Box>

                        <Box
                            component="h1"
                            sx={{
                                m: 0,
                                mt: { xs: '20px', md: 'clamp(20px, 3vw, 32px)' },
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(1.8rem, 3.4vw, 3rem)',
                                fontWeight: 400,
                                lineHeight: 1.02,
                                letterSpacing: '-0.04em',
                                color: palette.about.titleColor,
                            }}
                        >
                            Страница не найдена
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: '16px',
                                maxWidth: '46ch',
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: 'clamp(15px, 1.2vw, 17px)',
                                lineHeight: 1.6,
                                color: palette.text.secondary,
                            }}
                        >
                            Возможно, ссылка устарела или адрес набран с ошибкой.
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '12px 28px',
                                mt: { xs: '28px', md: '36px' },
                            }}
                        >
                            <Box
                                component={Link}
                                to="/"
                                sx={{
                                    ...linkSx,
                                    '&:hover .notfound-arrow': { transform: 'translateX(-4px)' },
                                }}
                            >
                                На главную
                            </Box>
                            <Box
                                component={Link}
                                to="/projects"
                                sx={{
                                    ...linkSx,
                                    '&:hover .notfound-arrow': { transform: 'translate(4px, -4px)' },
                                }}
                            >
                                Проекты
                                <ArrowUpRight
                                    className="notfound-arrow"
                                    size={16}
                                    weight="light"
                                    aria-hidden="true"
                                    style={{ transition: arrowTransition }}
                                />
                            </Box>
                            <Box
                                component={Link}
                                to="/events"
                                sx={{
                                    ...linkSx,
                                    '&:hover .notfound-arrow': { transform: 'translate(4px, -4px)' },
                                }}
                            >
                                Мероприятия
                                <ArrowUpRight
                                    className="notfound-arrow"
                                    size={16}
                                    weight="light"
                                    aria-hidden="true"
                                    style={{ transition: arrowTransition }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
