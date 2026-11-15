import { useEffect, useLayoutEffect } from 'react'
import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'
import { Navigate, useParams } from 'react-router-dom'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import Header from '../components/header'
import Seo from '../components/seo'
import events from '../data/events'
import eventGalleries from '../data/event-galleries'
import { SITE_URL, WEBSITE_ID } from '../data/seo'

export default function PageEvent() {
    const theme = useTheme()
    const palette = theme.vars.palette
    const { slug } = useParams()
    const event = events.find((item) => item.link === slug)

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        if (!event) return undefined

        Fancybox.bind('[data-fancybox="event-gallery"]', {})

        return () => {
            Fancybox.destroy()
        }
    }, [event])

    if (!event) {
        return <Navigate to="/" replace />
    }

    const folder = event.imageCap.split('/').slice(0, -1).join('/')
    const cover = event.imageCap.split('/').pop()
    const galleryFiles = event.images?.length
        ? event.images
        : (eventGalleries[folder] ?? [])
    const gallery = [cover, ...galleryFiles.filter((image) => image !== cover)]

    return (
        <>
            <Seo
                title={`${event.title} — Даниил Дыбка`}
                description={`${event.desc} ${event.date}.`}
                keywords={`${event.title}, ${event.date}, мероприятие, конкурс, Даниил Дыбка`}
                path={`/events/${event.link}`}
                image={`/img/contests/${event.imageCap}`}
                imageAlt={event.title}
                type="article"
                jsonLd={{
                    '@type': 'Event',
                    name: event.title,
                    description: event.desc,
                    url: `${SITE_URL}/events/${event.link}`,
                    image: `${SITE_URL}/img/contests/${event.imageCap}`,
                    inLanguage: 'ru-RU',
                    isPartOf: { '@id': WEBSITE_ID },
                }}
            />
            <Header />

            <Box
                component="section"
                aria-label={event.title}
                sx={{
                    position: 'relative',
                    height: '100svh',
                    minHeight: '100svh',
                    overflow: 'hidden',
                    bgcolor: '#000',
                }}
            >
                <Box
                    component="img"
                    src={`/img/contests/${event.imageCap}`}
                    alt={event.title}
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 2,
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: { xs: '50% 32%', md: '50% 38%' },
                        filter: 'grayscale(0.2) contrast(1) brightness(.9)',
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 3,
                        pointerEvents: 'none',
                        background:
                            'linear-gradient(180deg, rgba(0,0,0,.46) 0%, rgba(0,0,0,.08) 14%, rgba(0,0,0,.02) 30%, rgba(0,0,0,.86) 100%), linear-gradient(90deg, rgba(0,0,0,.35) 0%, rgba(0,0,0,0) 58%)',
                    }}
                />

                <Box className="hero-noise" aria-hidden="true" />
            </Box>

            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: 'clamp(24px, 4.6vw, 64px)',
                }}
            >
                <Box
                    sx={{
                        maxWidth: '1600px',
                        mx: 'auto',
                        pt: 'clamp(16px, 3vw, 32px)',
                        pb: 'clamp(80px, 12vw, 160px)',
                    }}
                >
                    <Box
                        sx={{
                            mt: 'clamp(32px, 8vw, 80px)',
                            mb: 'clamp(56px, 8vw, 120px)',
                            maxWidth: '1600px',
                        }}
                    >
                        <Box
                            component="span"
                            sx={{
                                display: 'block',
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '10px',
                                fontWeight: 500,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: palette.text.tertiary,
                            }}
                        >
                            {event.date}
                        </Box>

                        <Box
                            component="h1"
                            sx={{
                                m: 0,
                                mt: 'clamp(16px, 2vw, 24px)',
                                maxWidth: '20ch',
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(2.1rem, 4vw, 3.6rem)',
                                fontWeight: 400,
                                lineHeight: 0.95,
                                letterSpacing: '-0.04em',
                                color: palette.about.titleColor,
                            }}
                        >
                            {event.title}
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: 'clamp(16px, 2vw, 24px)',
                                maxWidth: '60ch',
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: 'clamp(16px, 1.25vw, 18px)',
                                lineHeight: 1.6,
                                color: palette.text.secondary,
                            }}
                        >
                            {event.desc}
                        </Box>
                    </Box>

                    {event.content?.length ? (
                        <Box sx={{ display: 'flex', justifyContent: 'end', mb: '100px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                {event.content.map((item, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            fontSize: '30px',
                                            fontFamily: 'var(--joy-fontFamily-body)',
                                            color: palette.text.primary,
                                            maxWidth: '48ch',
                                            textAlign: 'end'
                                        }}
                                    >
                                        <div dangerouslySetInnerHTML={{ __html: item }} />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    ) : null}

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: 'clamp(8px, 1.2vw, 16px)',
                        }}
                    >
                        {gallery.map((image, index) => (
                            <Box
                                key={image}
                                component="a"
                                href={`/img/contests/${folder}/${image}`}
                                data-fancybox="event-gallery"
                                sx={{
                                    display: 'block',
                                    width: '100%',
                                    cursor: 'zoom-in',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={`/img/contests/${folder}/${image}`}
                                    alt={`${event.title} — фотография ${index + 1}`}
                                    loading="lazy"
                                    decoding="async"
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        height: { xs: '320px', md: '620px' },
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
