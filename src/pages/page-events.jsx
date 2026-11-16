import { useEffect, useMemo, useRef, useState } from 'react'
import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from '@phosphor-icons/react'
import Header from '../components/header'
import Seo from '../components/seo'
import events from '../data/events'
import { imagePositionSx } from '../data/image-position'
import { SITE_URL, WEBSITE_ID } from '../data/seo'

const MONTHS = {
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

const kickerSx = {
    fontFamily: 'var(--joy-fontFamily-body)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
}

const plural = (count, one, few, many) => {
    const mod10 = count % 10
    const mod100 = count % 100

    if (mod10 === 1 && mod100 !== 11) return one
    if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return few
    return many
}

const eventsWord = (count) => plural(count, 'событие', 'события', 'событий')

const formatEventDate = (date) => date
    .replace(/\s+\d{4}\s*г\.?$/, '')
    .replace(/\s*г\.$/, '')
    .trim()

const monthIndex = (date) => {
    const match = date.match(/(?:\d{1,2})(?:\s*[-–]\s*\d{1,2})?\s+([а-яё]+)\s+(\d{4})/i)

    if (!match) return 0

    const month = MONTHS[match[1].toLowerCase()]
    const year = Number(match[2])

    if (month === undefined || !year) return 0

    return year * 12 + month
}

const getEventGap = (event, previous) => {
    if (!previous) return { xs: '0px', md: '0px' }

    const difference = Math.max(0, monthIndex(previous.date) - monthIndex(event.date))

    return {
        xs: `${Math.min(56, 18 + difference * 4)}px`,
        md: `${Math.min(88, 26 + difference * 8)}px`,
    }
}

function YearHeading({ year, count, first, palette }) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '110px minmax(0, 1fr)' },
                columnGap: { md: '48px' },
                mt: first ? 0 : { xs: '44px', md: '68px' },
                pt: { xs: '18px', md: '24px' },
                pb: { xs: '14px', md: '18px' },
                pl: { xs: '28px', md: 0 },
                borderTop: '1px solid',
                borderColor: palette.divider,
                position: 'relative',
                zIndex: 1,
            }}
        >
            <Box
                sx={{
                    gridColumn: { xs: '1', md: '2' },
                    display: 'flex',
                    alignItems: 'baseline',
                    justifyContent: 'space-between',
                    gap: '16px',
                }}
            >
                <Box
                    component="h2"
                    sx={{
                        m: 0,
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(2.25rem, 4.4vw, 4.4rem)',
                        fontWeight: 400,
                        lineHeight: 0.9,
                        letterSpacing: '-0.05em',
                        color: palette.about.titleColor,
                    }}
                >
                    {year}
                </Box>
                <Box sx={{ ...kickerSx, fontSize: '9px', color: palette.text.tertiary, textAlign: 'right' }}>
                    {count} {eventsWord(count)}
                </Box>
            </Box>
        </Box>
    )
}

function EventRow({ event, index, gap, active, onActivate, palette, showInlineImage }) {
    const isActive = active?.link === event.link

    return (
        <Box data-event-link={event.link} sx={{ mt: gap }}>
            <Box
                component={Link}
                to={`/events/${event.link}`}
                onMouseEnter={() => onActivate(event)}
                onFocus={() => onActivate(event)}
                aria-label={`${event.title}. ${event.date}`}
                sx={{
                    position: 'relative',
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: '110px minmax(0, 1fr)' },
                    columnGap: { md: '48px' },
                    pl: { xs: '28px', md: 0 },
                    pb: { xs: '26px', md: '38px' },
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover .event-title': {
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                    },
                    '& .event-arrow': {
                        opacity: 0,
                        transition: 'transform .35s cubic-bezier(.22, 1, .36, 1), opacity .35s ease',
                    },
                    '&:hover .event-arrow': {
                        transform: 'translate(4px, -4px)',
                        opacity: 1,
                    },
                    '&:focus-visible': {
                        outline: '1px solid',
                        outlineColor: palette.text.primary,
                        outlineOffset: '8px',
                    },
                    '&:focus-visible .event-title': {
                        textDecoration: 'underline',
                        textUnderlineOffset: '4px',
                    },
                    '&:focus-visible .event-arrow': {
                        opacity: 1,
                    },
                }}
            >
                <Box
                    sx={{
                        display: { xs: 'none', md: 'block' },
                        pt: '4px',
                        pr: '12px',
                        textAlign: 'right',
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            ...kickerSx,
                            fontSize: '9px',
                            color: palette.text.tertiary,
                        }}
                    >
                        {String(index + 1).padStart(2, '0')}
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            mt: '9px',
                            ...kickerSx,
                            fontSize: '10px',
                            letterSpacing: '0.08em',
                            color: palette.text.secondary,
                        }}
                    >
                        {formatEventDate(event.date)}
                    </Box>
                </Box>

                <Box sx={{ minWidth: 0, pt: '3px' }}>
                    <Box
                        component="span"
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            mb: '9px',
                            ...kickerSx,
                            fontSize: '10px',
                            letterSpacing: '0.08em',
                            color: palette.text.tertiary,
                        }}
                    >
                        {formatEventDate(event.date)}
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '12px',
                        }}
                    >
                        <Box
                            component="h3"
                            className="event-title"
                            sx={{
                                m: 0,
                                maxWidth: '28ch',
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(1.55rem, 2.4vw, 2.1rem)',
                                fontWeight: 400,
                                lineHeight: 1.05,
                                letterSpacing: '-0.035em',
                                color: palette.about.titleColor,
                                textWrap: 'balance',
                            }}
                        >
                            {event.title}
                        </Box>
                        <ArrowUpRight
                            className="event-arrow"
                            size={16}
                            weight="light"
                            aria-hidden="true"
                            style={{ flexShrink: 0 }}
                        />
                    </Box>

                    <Box
                        component="p"
                        sx={{
                            m: 0,
                            mt: '11px',
                            maxWidth: '58ch',
                            fontFamily: 'var(--joy-fontFamily-body)',
                            fontSize: { xs: '14px', md: '15px' },
                            lineHeight: 1.6,
                            color: palette.text.secondary,
                        }}
                    >
                        {event.desc}
                    </Box>

                    {showInlineImage ? (
                        <Box sx={{ mt: '16px' }}>
                            <Box
                                component="img"
                                src={`/img/contests/${event.imageCap}`}
                                alt={event.title}
                                loading="lazy"
                                decoding="async"
                                sx={{
                                    display: 'block',
                                    width: '100%',
                                    aspectRatio: '4 / 3',
                                    objectFit: 'cover',
                                    objectPosition: imagePositionSx(event.position),
                                    border: '1px solid',
                                    borderColor: palette.divider,
                                }}
                            />
                        </Box>
                    ) : null}
                </Box>

                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        top: '8px',
                        left: { xs: '7px', md: '110px' },
                        width: isActive ? '11px' : '7px',
                        height: isActive ? '11px' : '7px',
                        borderRadius: '50%',
                        border: '1px solid',
                        borderColor: isActive ? palette.text.primary : palette.text.tertiary,
                        bgcolor: isActive ? palette.text.primary : palette.background.body,
                        transform: 'translateX(-50%)',
                        transition: 'width .2s ease, height .2s ease, background-color .2s ease, border-color .2s ease',
                        zIndex: 2,
                    }}
                />
            </Box>
        </Box>
    )
}

export default function PageEvents() {
    const theme = useTheme()
    const palette = theme.vars.palette
    const [active, setActive] = useState(events[0])
    const [showPreview, setShowPreview] = useState(() => (
        typeof window !== 'undefined' && window.matchMedia('(min-width: 1200px)').matches
    ))
    const timelineRef = useRef(null)
    const progressRef = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const query = window.matchMedia('(min-width: 1200px)')
        const handleChange = (event) => setShowPreview(event.matches)

        query.addEventListener?.('change', handleChange)
        if (!query.addEventListener) query.addListener(handleChange)

        return () => {
            query.removeEventListener?.('change', handleChange)
            if (!query.removeEventListener) query.removeListener(handleChange)
        }
    }, [])

    const groups = useMemo(() => {
        const result = []

        for (const event of events) {
            const year = (event.date.match(/\d{4}/) ?? [''])[0]
            let group = result.find((item) => item.year === year)

            if (!group) {
                group = { year, events: [] }
                result.push(group)
            }

            group.events.push(event)
        }

        return result
    }, [])

    useEffect(() => {
        let frame = 0

        const update = () => {
            const timeline = timelineRef.current
            if (!timeline) return

            const timelineRect = timeline.getBoundingClientRect()
            const anchor = window.innerHeight * 0.42
            let nearestLink = null
            let nearestDistance = Infinity

            timeline.querySelectorAll('[data-event-link]').forEach((node) => {
                const rect = node.getBoundingClientRect()
                const distance = Math.abs(rect.top - anchor)

                if (distance < nearestDistance) {
                    nearestDistance = distance
                    nearestLink = node.dataset.eventLink
                }
            })

            if (nearestLink) {
                const next = events.find((event) => event.link === nearestLink)
                if (next) {
                    setActive((current) => (current?.link === next.link ? current : next))
                }
            }

            if (progressRef.current) {
                const progress = Math.min(
                    1,
                    Math.max(0, (anchor - timelineRect.top) / timelineRect.height),
                )
                progressRef.current.style.transform = `scaleY(${progress})`
            }
        }

        const onScroll = () => {
            if (frame) return
            frame = window.requestAnimationFrame(() => {
                frame = 0
                update()
            })
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)

        return () => {
            window.cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
        }
    }, [])

    const total = events.length
    let eventIndex = 0
    let previousEvent = null

    return (
        <>
            <Seo
                title="Мероприятия — Даниил Дыбка"
                description="Хроника мероприятий Даниила Дыбки: конференции, олимпиады, стажировки и награды 2022—2026 годов."
                keywords="мероприятия, конференции, олимпиады, стажировки, награды, хроника, Даниил Дыбка"
                path="/events"
                image={`/img/contests/${events[0].imageCap}`}
                imageAlt={events[0].title}
                jsonLd={[
                    {
                        '@type': 'CollectionPage',
                        name: 'Мероприятия',
                        description: 'Хроника мероприятий Даниила Дыбки: конференции, олимпиады, стажировки и награды 2022—2026 годов.',
                        url: `${SITE_URL}/events`,
                        inLanguage: 'ru-RU',
                        isPartOf: { '@id': WEBSITE_ID },
                    },
                    {
                        '@type': 'ItemList',
                        name: 'Мероприятия',
                        itemListElement: events.map((event, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            url: `${SITE_URL}/events/${event.link}`,
                            name: event.title,
                        })),
                    },
                ]}
            />
            <Header />

            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                }}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            pt: {
                                xs: 'clamp(104px, 14vw, 140px)',
                                md: 'clamp(140px, 12vw, 200px)',
                            },
                        }}
                    >
                        <Box sx={{ maxWidth: '980px' }}>
                            <Box
                                sx={{
                                    ...kickerSx,
                                    color: palette.text.tertiary,
                                }}
                            >
                                Хроника 2022—2026
                            </Box>
                            <Box
                                component="h1"
                                sx={{
                                    m: 0,
                                    mt: '16px',
                                    fontFamily: 'var(--joy-fontFamily-display)',
                                    fontSize: 'clamp(2.8rem, 7vw, 6.4rem)',
                                    fontWeight: 400,
                                    lineHeight: 0.9,
                                    letterSpacing: '-0.05em',
                                    color: palette.about.titleColor,
                                }}
                            >
                                Мероприятия
                            </Box>
                            <Box
                                component="p"
                                sx={{
                                    m: 0,
                                    mt: '24px',
                                    maxWidth: '56ch',
                                    fontFamily: 'var(--joy-fontFamily-body)',
                                    fontSize: { xs: '15px', md: '18px' },
                                    lineHeight: 1.6,
                                    color: palette.text.secondary,
                                }}
                            >
                                Конференции, олимпиады, стажировки и награды — {total} {eventsWord(total)} с 2022 по 2026 год.
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                gap: '24px',
                                mt: '48px',
                                pb: '24px',
                                borderBottom: '1px solid',
                                borderColor: palette.divider,
                            }}
                        >
                            <Box sx={{ ...kickerSx, fontSize: '9px', color: palette.text.tertiary }}>
                                {total} {eventsWord(total)} · {groups.length} лет
                            </Box>
                            <Box sx={{ ...kickerSx, fontSize: '9px', color: palette.text.tertiary }}>
                                2022—2026
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1fr) 400px' },
                            columnGap: { lg: 'clamp(56px, 6vw, 96px)' },
                            alignItems: 'start',
                            pt: { xs: '34px', md: '56px' },
                            pb: { xs: 'clamp(80px, 12vw, 120px)', md: 'clamp(120px, 14vw, 200px)' },
                        }}
                    >
                        <Box ref={timelineRef} sx={{ position: 'relative', minWidth: 0 }}>
                            <Box
                                aria-hidden="true"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: { xs: '7px', md: '110px' },
                                    width: '1px',
                                    bgcolor: palette.divider,
                                }}
                            />
                            <Box
                                ref={progressRef}
                                aria-hidden="true"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    bottom: 0,
                                    left: { xs: '7px', md: '110px' },
                                    width: '1px',
                                    bgcolor: palette.text.primary,
                                    opacity: 0.5,
                                    transform: 'scaleY(0)',
                                    transformOrigin: 'top',
                                    pointerEvents: 'none',
                                }}
                            />
                            <Box
                                aria-hidden="true"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: { xs: '7px', md: '110px' },
                                    width: '5px',
                                    height: '5px',
                                    borderRadius: '50%',
                                    bgcolor: palette.text.tertiary,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            />

                            {groups.map((group, groupIndex) => (
                                <Box key={group.year}>
                                    <YearHeading
                                        year={group.year}
                                        count={group.events.length}
                                        first={groupIndex === 0}
                                        palette={palette}
                                    />
                                    {group.events.map((event) => {
                                        const index = eventIndex
                                        eventIndex += 1
                                        const gap = getEventGap(event, previousEvent)
                                        previousEvent = event

                                        return (
                                            <EventRow
                                                key={event.link}
                                                event={event}
                                                index={index}
                                                gap={gap}
                                                active={active}
                                                onActivate={setActive}
                                                palette={palette}
                                                showInlineImage={!showPreview}
                                            />
                                        )
                                    })}
                                </Box>
                            ))}

                            <Box
                                aria-hidden="true"
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: { xs: '7px', md: '110px' },
                                    width: '5px',
                                    height: '5px',
                                    borderRadius: '50%',
                                    bgcolor: palette.text.tertiary,
                                    transform: 'translate(-50%, 50%)',
                                }}
                            />
                        </Box>

                        {showPreview ? (
                        <Box
                            sx={{
                                position: 'sticky',
                                top: '120px',
                                alignSelf: 'start',
                            }}
                        >
                            <Box
                                component={Link}
                                to={`/events/${active.link}`}
                                sx={{
                                    display: 'block',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                    '&:hover .preview-title': {
                                        opacity: 0.6,
                                    },
                                    '&:focus-visible': {
                                        outline: '1px solid',
                                        outlineColor: palette.text.primary,
                                        outlineOffset: '6px',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        aspectRatio: '4 / 5',
                                        maxHeight: 'calc(100svh - 220px)',
                                        overflow: 'hidden',
                                        bgcolor: 'rgba(128, 128, 128, .12)',
                                        border: '1px solid',
                                        borderColor: palette.divider,
                                    }}
                                >
                                    <Box
                                        key={active.link}
                                        component="img"
                                        className="event-preview-image"
                                        src={`/img/contests/${active.imageCap}`}
                                        alt={active.title}
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="async"
                                        sx={{
                                            position: 'absolute',
                                            inset: 0,
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            objectPosition: imagePositionSx(active.position),
                                        }}
                                    />
                                </Box>

                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: '18px',
                                        mt: '16px',
                                    }}
                                >
                                    <Box>
                                        <Box
                                            sx={{
                                                ...kickerSx,
                                                fontSize: '9px',
                                                color: palette.text.tertiary,
                                            }}
                                        >
                                            {active.date}
                                        </Box>
                                        <Box
                                            className="preview-title"
                                            sx={{
                                                mt: '6px',
                                                fontFamily: 'var(--joy-fontFamily-display)',
                                                fontSize: '20px',
                                                lineHeight: 1.12,
                                                letterSpacing: '-0.025em',
                                                color: palette.about.titleColor,
                                                transition: 'opacity .2s ease',
                                            }}
                                        >
                                            {active.title}
                                        </Box>
                                    </Box>
                                    <ArrowUpRight
                                        size={18}
                                        weight="light"
                                        aria-hidden="true"
                                        style={{ flexShrink: 0, marginTop: '2px' }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                        ) : null}
                    </Box>
                </Box>
            </Box>
        </>
    )
}
