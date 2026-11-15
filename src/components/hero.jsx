import { useEffect, useState } from 'react'
import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import { ArrowUpRight } from '@phosphor-icons/react'
import events from '../data/events'
import mainEvents from '../data/main-events'
import { imagePositionSx } from '../data/image-position'

const months = {
    января: 0,
    февраля: 1,
    марта: 2,
    апреля: 3,
    мая: 4,
    июня: 5,
    июля: 6,
    августа: 7,
    сентября: 8,
    октября: 9,
    ноября: 10,
    декабря: 11,
}

const eventTime = (event) => {
    const year = Number(event.date.match(/\d{4}/)?.[0] ?? 0)
    const monthName = Object.keys(months).find((month) =>
        event.date.toLowerCase().includes(month),
    )
    const month = monthName ? months[monthName] : 0
    const day = monthName ? Number(event.date.match(/\d+/)?.[0] ?? 1) : 1
    return new Date(year, month, day).getTime()
}

const shuffleIndices = (length) => {
    const indices = Array.from({ length }, (_, index) => index)
    for (let i = indices.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1))
        const value = indices[i]
        indices[i] = indices[j]
        indices[j] = value
    }
    return indices
}

const sortedEvents = events
    .filter((event) => mainEvents.includes(event.link))
    .sort((a, b) => eventTime(b) - eventTime(a))

const imageSrc = (event) => `/img/contests/${event.imageCap}`
const eventHref = (event) => `/events/${event.link}`

export default function Hero() {
    const [slide, setSlide] = useState(() => ({
        order: shuffleIndices(sortedEvents.length),
        position: 0,
        previous: null,
    }))
    const event = sortedEvents[slide.order[slide.position]]
    const previousEvent = slide.previous === null ? null : sortedEvents[slide.previous]

    useEffect(() => {
        const timer = window.setTimeout(() => {
            setSlide((current) => {
                const currentIndex = current.order[current.position]
                const nextPosition = current.position + 1

                if (nextPosition < current.order.length) {
                    return {
                        ...current,
                        position: nextPosition,
                        previous: currentIndex,
                    }
                }

                const order = shuffleIndices(current.order.length)

                if (order.length > 1 && order[0] === currentIndex) {
                    const value = order[0]
                    order[0] = order[1]
                    order[1] = value
                }

                return { order, position: 0, previous: currentIndex }
            })
        }, 7000)

        return () => window.clearTimeout(timer)
    }, [slide.position, slide.order])

    useEffect(() => {
        const nextPosition = slide.position + 1

        if (nextPosition >= slide.order.length) return

        const next = sortedEvents[slide.order[nextPosition]]
        const image = new window.Image()
        image.src = imageSrc(next)
    }, [slide.position, slide.order])

    return (
        <Box
            component="section"
            aria-labelledby="hero-name"
            sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                height: { xs: 'auto', md: '100svh' },
                minHeight: '100svh',
                overflow: 'hidden',
                bgcolor: '#000',
                color: '#fff',
            }}
        >
            {previousEvent ? (
                <Box
                    key={`previous-${slide.previous}`}
                    component="img"
                    src={imageSrc(previousEvent)}
                    alt=""
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 1,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: imagePositionSx(previousEvent.position),
                        filter: 'grayscale(0.2) contrast(1) brightness(.9)',
                        animation: 'heroImageOut 1.2s ease both',
                    }}
                />
            ) : null}

            <Box
                key={`active-${slide.order[slide.position]}`}
                component="img"
                src={imageSrc(event)}
                alt={`Фотография с мероприятия «${event.title}»`}
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: imagePositionSx(event.position),
                    filter: 'grayscale(0.2) contrast(1) brightness(.9)',
                    animation: 'heroImageIn 1.2s ease both',
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

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 5,
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'stretch', md: 'flex-end' },
                    justifyContent: 'space-between',
                    gap: 'clamp(28px, 5vw, 80px)',
                    width: '100%',
                    p: 'clamp(24px, 4.6vw, 64px)',
                    pb: { xs: '88px', md: 'clamp(24px, 4.6vw, 64px)' },
                }}
            >
                <Box
                    sx={{
                        order: { xs: 2, md: 0 },
                        maxWidth: { xs: '100%', md: '45%' },
                    }}
                >
                    <Typography
                        level="h1"
                        id="hero-name"
                        sx={{
                            fontSize: 'clamp(2.1rem, 4vw, 3.6rem)',
                            fontWeight: 400,
                            lineHeight: 0.95,
                            letterSpacing: '-0.03em',
                            color: '#fff',
                        }}
                    >
                        Даниил Дыбка
                    </Typography>
                    <Typography
                        level="body-md"
                        sx={{
                            mt: 1.5,
                            color: 'rgba(255,255,255,.78)',
                        }}
                    >
                        Разработчик цифровых сервисов.
                    </Typography>
                </Box>

                <Box
                    component="a"
                    href={eventHref(event)}
                    sx={{
                        order: { xs: 1, md: 0 },
                        display: { md: 'flex', xs: 'none' },
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        width: { xs: '100%', md: 'auto' },
                        maxWidth: { xs: '100%', md: '48ch' },
                        color: '#fff',
                        textAlign: 'right',
                        textDecoration: 'none',
                        '&:hover .hero-arrow': {
                            transform: 'translate(5px, -5px)',
                        },
                        '&:focus-visible .hero-arrow': {
                            transform: 'translate(5px, -5px)',
                        },
                        '&:focus-visible': {
                            outline: '1px solid rgba(255,255,255,.8)',
                            outlineOffset: '10px',
                        },
                    }}
                >
                    <ArrowUpRight
                        className="hero-arrow"
                        size={32}
                        weight="light"
                        aria-hidden="true"
                        style={{
                            marginBottom: '14px',
                            transition: 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                    />
                    <Box
                        key={`${event.link}-${event.date}`}
                        sx={{
                            animation:
                                'heroTextIn .9s cubic-bezier(0.22, 1, 0.36, 1) both',
                        }}
                    >
                        <Typography
                            level="h2"
                            sx={{
                                fontSize: 'clamp(1.3rem, 2.1vw, 1.8rem)',
                                fontWeight: 400,
                                lineHeight: 1.05,
                                letterSpacing: '-0.02em',
                                color: '#fff',
                            }}
                        >
                            {event.title}
                        </Typography>
                        <Typography
                            level="body-sm"
                            sx={{
                                mt: 1,
                                maxWidth: '48ch',
                                ml: 'auto',
                                color: 'rgba(255,255,255,.78)',
                                fontSize: '11.5px',
                                lineHeight: 1.55,
                            }}
                        >
                            {event.desc}
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
