import { useEffect, useRef, useState } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme, useTheme } from '@mui/joy/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ArrowUpRight } from '@phosphor-icons/react'
import CaseBrowser from './case-browser'
import IzobretariumLogo from './izobretarium-logo'

const previews = {
    light: {
        src: '/img/projects/izobretarium-preview-light.webp',
        srcSet: '/img/projects/izobretarium-preview-light.webp 1440w, /img/projects/izobretarium-preview-light@2x.webp 2880w',
    },
    dark: {
        src: '/img/projects/izobretarium-preview-dark.webp',
        srcSet: '/img/projects/izobretarium-preview-dark.webp 1440w, /img/projects/izobretarium-preview-dark@2x.webp 2880w',
    },
}

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

export default function IzobretariumCase() {
    const theme = useTheme()
    const palette = theme.vars.palette
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const isMobile = useMediaQuery('(max-width: 899px)')
    const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')
    const interactive = !prefersReducedMotion

    const sectionRef = useRef(null)
    const viewportRef = useRef(null)
    const imageRef = useRef(null)
    const [maxY, setMaxY] = useState(0)

    useEffect(() => {
        const measure = () => {
            if (!imageRef.current || !viewportRef.current) return

            const imageHeight = imageRef.current.offsetHeight
            const viewportHeight = viewportRef.current.clientHeight

            setMaxY(Math.max(0, imageHeight - viewportHeight))
        }

        measure()

        const observer = new ResizeObserver(measure)

        if (imageRef.current) observer.observe(imageRef.current)
        if (viewportRef.current) observer.observe(viewportRef.current)

        window.addEventListener('resize', measure)

        return () => {
            observer.disconnect()
            window.removeEventListener('resize', measure)
        }
    }, [interactive, dark, isMobile])

    useEffect(() => {
        if (!interactive) return

        let frame = 0

        const update = () => {
            frame = 0

            const section = sectionRef.current
            const image = imageRef.current

            if (!section || !image) return

            const range = section.offsetHeight - window.innerHeight

            if (range <= 0) return

            const progress = Math.min(
                1,
                Math.max(0, -section.getBoundingClientRect().top / range),
            )

            image.style.transform = `translate3d(0, ${-progress * maxY}px, 0)`

        }

        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(update)
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)

        return () => {
            window.cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [interactive, maxY, isMobile])

    const preview = dark ? previews.dark : previews.light
    const browserBackground = dark ? '#0f0f10' : '#ffffff'

    const textBlock = (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: palette.text.primary,
                }}
            >
                <IzobretariumLogo
                    style={{
                        width: '70px',
                        height: '60px',
                        flexShrink: 0,
                    }}
                />
            </Box>

            <Box
                component="h2"
                id="izobretarium-title"
                sx={{
                    m: 0,
                    mt: 'clamp(20px, 2.4vw, 32px)',
                    maxWidth: '14ch',
                    fontFamily: 'var(--joy-fontFamily-display)',
                    fontSize: 'clamp(30px, 3.2vw, 48px)',
                    fontWeight: 400,
                    lineHeight: 1.02,
                    letterSpacing: '-0.03em',
                    color: palette.text.primary,
                }}
            >
                Редизайн сайта Изобретариум
            </Box>

            <Box
                component="p"
                sx={{
                    m: 0,
                    mt: 'clamp(16px, 2vw, 24px)',
                    maxWidth: '36ch',
                    fontFamily: 'var(--joy-fontFamily-body)',
                    fontSize: 'clamp(15px, 1.25vw, 18px)',
                    lineHeight: 1.6,
                    color: palette.text.secondary,
                }}
            >
                Детский технопарк Московской области. Обновил структуру,
                визуальный язык и адаптивность сайта.
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    gap: '12px 28px',
                    mt: '36px',
                }}
            >
                <Box
                    component="a"
                    href="https://izobretarium.ru"
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: palette.text.primary,
                        fontFamily: 'var(--joy-fontFamily-body)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'opacity .25s ease',
                        '&:hover': { opacity: 0.55 },
                        '&:hover .aquarium-arrow': {
                            transform: 'translate(4px, -4px)',
                        },
                    }}
                >
                    Открыть сайт
                    <ArrowUpRight
                        className="aquarium-arrow"
                        size={16}
                        weight="light"
                        aria-hidden="true"
                        style={{
                            transition:
                                'transform .5s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                    />
                </Box>
                <Box
                    component="a"
                    href={`/projects/izobretarium`}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '10px',
                        color: palette.text.primary,
                        fontFamily: 'var(--joy-fontFamily-body)',
                        fontSize: '10px',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        textDecoration: 'none',
                        transition: 'opacity .25s ease',
                        '&:hover': { opacity: 0.55 },
                    }}
                >
                    О проекте
                </Box>
            </Box>
        </Box>
    )

    const browserWindow = (
        <CaseBrowser
            title="Детский технопарк Изобретариум"
            dark={dark}
            viewportRef={viewportRef}
            viewportSx={{
                height: interactive
                    ? 'clamp(320px, 58svh, 620px)'
                    : 'clamp(300px, 52svh, 480px)',
                bgcolor: browserBackground,
            }}
        >
            {interactive ? (
                <Box
                    component="img"
                    ref={imageRef}
                    src={preview.src}
                    srcSet={preview.srcSet}
                    sizes="(min-width: 900px) 58vw, 92vw"
                    alt="Главная страница сайта Изобретариум"
                    loading="lazy"
                    decoding="async"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        aspectRatio: '1440 / 5891',
                        transform: 'translate3d(0, 0, 0)',
                        willChange: 'transform',
                    }}
                />
            ) : (
                <Box
                    component="img"
                    src={preview.src}
                    srcSet={preview.srcSet}
                    sizes="(min-width: 900px) 58vw, 92vw"
                    alt="Главная страница сайта Изобретариум"
                    loading="lazy"
                    decoding="async"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top',
                    }}
                />
            )}
        </CaseBrowser>
    )

    if (isMobile) {
        return (
            <Box
                component="section"
                aria-labelledby="izobretarium-title"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: '20px',
                    pt: 'clamp(72px, 10vw, 120px)',
                    pb: interactive ? 0 : 'clamp(72px, 10vw, 120px)',
                }}
            >
                <Box sx={{ maxWidth: '1440px', mx: 'auto' }}>
                    {textBlock}

                    {interactive ? (
                        <Box
                            ref={sectionRef}
                            sx={{
                                position: 'relative',
                                height: '180vh',
                                mt: 'clamp(28px, 5vw, 40px)',
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'sticky',
                                    top: 0,
                                    display: 'flex',
                                    alignItems: 'center',
                                    height: '100svh',
                                }}
                            >
                                <Box sx={{ width: '100%' }}>{browserWindow}</Box>
                            </Box>
                        </Box>
                    ) : (
                        <Box sx={{ mt: 'clamp(28px, 5vw, 40px)' }}>
                            {browserWindow}
                        </Box>
                    )}
                </Box>
            </Box>
        )
    }

    return (
        <Box
            component="section"
            ref={sectionRef}
            aria-labelledby="izobretarium-title"
            sx={{
                position: 'relative',
                zIndex: 1,
                height: interactive ? '270vh' : 'auto',
                px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                py: interactive ? 0 : 'clamp(72px, 10vw, 120px)',
            }}
        >
            <Box
                sx={{
                    position: interactive ? 'sticky' : 'relative',
                    top: 0,
                    display: 'flex',
                    alignItems: 'center',
                    height: interactive ? '100svh' : 'auto',
                    py: interactive ? 'clamp(64px, 9vh, 110px)' : 0,
                }}
            >
                <Box sx={{ width: '100%', maxWidth: '1440px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                md: 'minmax(0, 0.4fr) minmax(0, 1fr)',
                            },
                            gap: 'clamp(32px, 5vw, 72px)',
                            alignItems: 'center',
                        }}
                    >
                        {textBlock}
                        {browserWindow}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
