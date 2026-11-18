import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
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

// Ось таймлайна: линия и точки должны иметь ровно одну и ту же середину по X.
// Ось совпадает с границей колонки с датой, линия толщиной 1px центрируется на ней
// (110.5 → занимает 110…111), а точки с нечётным диаметром попадают на целые пиксели.
const TIMELINE_COLUMN = '110.5px'
const TIMELINE_AXIS_X = { xs: '7.5px', md: TIMELINE_COLUMN }

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

const getPreviewPosition = (event) => (
    event.previewPosition ?? imagePositionSx(event.position).md
)

const getEventGap = (event, previous) => {
    if (!previous) return { xs: '0px', md: '0px' }

    const difference = Math.max(0, monthIndex(previous.date) - monthIndex(event.date))

    return {
        xs: `${Math.min(56, 18 + difference * 4)}px`,
        md: `${Math.min(88, 26 + difference * 8)}px`,
    }
}

function YearHeading({ year, first, palette }) {
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: `${TIMELINE_COLUMN} minmax(0, 1fr)` },
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
                        ml: 'auto'
                    }}
                >
                    {year}
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
                    gridTemplateColumns: { xs: '1fr', md: `${TIMELINE_COLUMN} minmax(0, 1fr)` },
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
                        pt: '7px',
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
                        <Box sx={{ mt: '16px', maxWidth: '500px' }}>
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
                                    borderRadius: '12px'
                                }}
                            />
                        </Box>
                    ) : null}
                </Box>

                <Box
                    aria-hidden="true"
                    data-event-dot=""
                    sx={{
                        position: 'absolute',
                        // Фиксируем центр точки, а не верх: диаметр растёт
                        // симметрично в обе стороны, поэтому точка не «съезжает».
                        top: { xs: '10.5px', md: '13.5px' },
                        left: TIMELINE_AXIS_X,
                        width: isActive ? '11px' : '7px',
                        height: isActive ? '11px' : '7px',
                        borderRadius: '50%',
                        border: '1px solid',
                        borderColor: isActive ? palette.text.primary : palette.text.tertiary,
                        bgcolor: isActive ? palette.text.primary : palette.background.body,
                        transform: 'translate(-50%, -50%)',
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
    const spineRef = useRef(null)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    // Линия начинается на верхней линейке хроники и заканчивается ровно
    // на точке последнего мероприятия, а не тянется через его нижний отступ.
    useLayoutEffect(() => {
        const timeline = timelineRef.current
        const spine = spineRef.current
        if (!timeline || !spine) return undefined

        const update = () => {
            const dots = timeline.querySelectorAll('[data-event-dot]')
            const lastDot = dots[dots.length - 1]
            if (!lastDot) return

            const timelineTop = timeline.getBoundingClientRect().top
            const dotRect = lastDot.getBoundingClientRect()
            const length = dotRect.top + dotRect.height / 2 - timelineTop

            spine.style.height = `${Math.max(0, Math.round(length * 100) / 100)}px`
        }

        update()

        const observer = typeof ResizeObserver === 'undefined'
            ? null
            : new ResizeObserver(update)

        observer?.observe(timeline)
        window.addEventListener('resize', update)

        return () => {
            observer?.disconnect()
            window.removeEventListener('resize', update)
        }
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

            const anchor = window.innerHeight * 0.65
            const atTop = window.scrollY <= 2
            const atBottom = window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 2
            let nearestLink = atTop
                ? events[0].link
                : atBottom
                    ? events[events.length - 1].link
                    : null
            let nearestDistance = Infinity

            if (!atTop && !atBottom) {
                timeline.querySelectorAll('[data-event-link]').forEach((node) => {
                    const rect = node.getBoundingClientRect()
                    const distance = Math.abs(rect.top - anchor)

                    if (distance < nearestDistance) {
                        nearestDistance = distance
                        nearestLink = node.dataset.eventLink
                    }
                })
            }

            if (nearestLink) {
                const next = events.find((event) => event.link === nearestLink)
                if (next) {
                    setActive((current) => (current?.link === next.link ? current : next))
                }
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
                    pt: 'clamp(120px, 16vw, 200px)',
                }}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        component="h1"
                        sx={{
                            position: 'absolute',
                            width: '1px',
                            height: '1px',
                            p: 0,
                            m: '-1px',
                            overflow: 'hidden',
                            clip: 'rect(0, 0, 0, 0)',
                            whiteSpace: 'nowrap',
                            border: 0,
                        }}
                    >
                        Мероприятия
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
                                ref={spineRef}
                                aria-hidden="true"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: TIMELINE_AXIS_X,
                                    width: '1px',
                                    height: '100%',
                                    bgcolor: palette.divider,
                                    transform: 'translateX(-50%)',
                                }}
                            />

                            {groups.map((group, groupIndex) => (
                                <Box key={group.year}>
                                    <YearHeading
                                        year={group.year}
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
                                            borderRadius: '12px'
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
                                                objectPosition: getPreviewPosition(active),
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
