import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import {
    ArrowDown,
    ArrowRight,
    ArrowUpRight,
    BookOpen,
    CalendarDots,
    Image as ImageIcon,
    NewspaperClipping,
    TrendUp,
} from '@phosphor-icons/react'
import CaseBrowser from '../../components/case-browser'
import IzobretariumLogo from '../../components/izobretarium-logo'

const browserPages = [
    {
        id: 'home',
        label: 'Главная',
        path: '/',
        href: 'https://izobretarium.ru',
        title: 'Изобретариум — детский технопарк',
        alt: 'Главная страница сайта Изобретариум: навигация, обложка, быстрые ссылки и новости',
        light: {
            src: '/img/projects/izobretarium-preview-light.webp',
            srcSet: '/img/projects/izobretarium-preview-light.webp 1440w, /img/projects/izobretarium-preview-light@2x.webp 2880w',
        },
        dark: {
            src: '/img/projects/izobretarium-preview-dark.webp',
            srcSet: '/img/projects/izobretarium-preview-dark.webp 1440w, /img/projects/izobretarium-preview-dark@2x.webp 2880w',
        },
    },
    {
        id: 'programs',
        label: 'Программы',
        path: '/courses/',
        href: 'https://izobretarium.ru/courses/',
        title: 'Учебные программы',
        alt: 'Страница учебных программ Изобретариума с фильтрами и карточками курсов',
        light: { src: '/img/projects/izobretarium-pages/programs@light.webp' },
        dark: { src: '/img/projects/izobretarium-pages/programs@dark.webp' },
    },
    {
        id: 'program-unity',
        label: 'Страница программы',
        path: '/courses/developing-vr-and-ar-applications-and-games-in-unity/',
        href: 'https://izobretarium.ru/courses/developing-vr-and-ar-applications-and-games-in-unity/',
        title: 'VR и AR в Unity',
        alt: 'Страница программы «Разработка приложений и игр VR и AR в Unity»',
        light: { src: '/img/projects/izobretarium-pages/program-unity@light.webp' },
        dark: { src: '/img/projects/izobretarium-pages/program-unity@dark.webp' },
    },
    {
        id: 'school',
        label: 'Школа',
        path: '/school/',
        href: 'https://izobretarium.ru/school/',
        title: 'Школа Изобретателей',
        alt: 'Страница «Школа Изобретателей»: программы для семейных классов',
        light: { src: '/img/projects/izobretarium-pages/school@light.webp' },
        dark: { src: '/img/projects/izobretarium-pages/school@dark.webp' },
    },
    {
        id: 'party',
        label: 'Праздники',
        path: '/party',
        href: 'https://izobretarium.ru/party',
        title: 'Ваш праздник у нас',
        alt: 'Страница праздников в Изобретариуме: форматы мероприятий и запись',
        light: { src: '/img/projects/izobretarium-pages/party@light.webp' },
        dark: { src: '/img/projects/izobretarium-pages/party@dark.webp' },
    },
    {
        id: 'master-classes',
        label: 'Мастер-классы',
        path: '/master-classes/',
        href: 'https://izobretarium.ru/master-classes/',
        title: 'Мастер-классы',
        alt: 'Страница мастер-классов Изобретариума: профессии, форматы и запись',
        light: { src: '/img/projects/izobretarium-pages/master-classes@light.webp' },
        dark: { src: '/img/projects/izobretarium-pages/master-classes@dark.webp' },
    },
    {
        id: 'startup-studio',
        label: 'Стартап-студия',
        path: '/startup-studio/',
        href: 'https://izobretarium.ru/startup-studio/',
        title: 'Стартап студия',
        alt: 'Страница «Стартап студия Изобретариума 3.0»: резиденты, оборудование и заявка',
        light: { src: '/img/projects/izobretarium-pages/startup-studio@light.webp' },
        dark: { src: '/img/projects/izobretarium-pages/startup-studio@dark.webp' },
    },
]

const adminScreenshots = {
    light: '/img/pages/izobretarium/izoserver@light.jpg',
    dark: '/img/pages/izobretarium/izoserver@dark.jpg',
}

const metrics = [
    { label: 'Производительность', before: [89, 62], after: [99, 83] },
    { label: 'Специальные возможности', before: [53, 49], after: [90, 90] },
    { label: 'Рекомендации', before: [77, 77], after: [100, 96] },
    { label: 'Поисковая оптимизация', before: [73, 73], after: [100, 100] },
]

const changes = [
    {
        title: 'Архитектура',
        text: 'Пересобрана структура сайта: программы, новости и мероприятия получили понятные разделы, общую сетку и предсказуемую навигацию.',
    },
    {
        title: 'Визуальный язык',
        text: 'Новая типографика, карточки, цветовые акценты и ритм. Сайт стал спокойнее и понятнее для детей и родителей, сохранив характер технопарка.',
    },
    {
        title: 'Оптимизация',
        text: 'Переработаны загрузка медиа, шрифты и разметка. Вместе с доступностью и семантикой это дало рост PageSpeed на компьютере и телефоне.',
    },
]

const getPalette = (dark) => dark
    ? {
        page: '#101611',
        panel: '#1c1c1c',
        ink: '#f0f3ed',
        muted: 'rgba(240, 243, 237, .66)',
        faint: 'rgba(240, 243, 237, .42)',
        line: 'rgba(240, 243, 237, .13)',
        green: '#76ce98',
        greenSoft: 'rgba(118, 206, 152, .13)',
        orange: '#eba171',
        tabActiveBg: '#c9c9c4',
        tabActiveText: '#141414',
        browserDark: true,
    }
    : {
        panel: '#e8e8e8',
        ink: '#17211b',
        muted: 'rgba(23, 33, 27, .64)',
        faint: 'rgba(23, 33, 27, .42)',
        line: 'rgba(23, 33, 27, .13)',
        green: '#26794c',
        greenSoft: 'rgba(38, 121, 76, .1)',
        orange: '#c96f2f',
        tabActiveBg: '#5a5a57',
        tabActiveText: '#ffffff',
        browserDark: false,
    }

const linkSx = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '9px',
    color: 'inherit',
    fontFamily: 'var(--joy-fontFamily-body)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.11em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'opacity .25s ease',
    '&:hover': { opacity: 0.55 },
}

const kickerSx = {
    fontFamily: 'var(--joy-fontFamily-body)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
}

function Stat({ value, label, palette }) {
    return (
        <Box>
            <Box
                sx={{
                    fontFamily: 'var(--joy-fontFamily-display)',
                    fontSize: 'clamp(3rem, 6.4vw, 6.4rem)',
                    fontWeight: 400,
                    lineHeight: 0.86,
                    letterSpacing: '-0.055em',
                    color: palette.ink,
                }}
            >
                {value}
            </Box>
            <Box
                sx={{
                    mt: '14px',
                    maxWidth: '22ch',
                    fontFamily: 'var(--joy-fontFamily-body)',
                    fontSize: 'clamp(13px, 1.1vw, 15px)',
                    lineHeight: 1.5,
                    color: palette.muted,
                }}
            >
                <span dangerouslySetInnerHTML={{ __html: label }} />
            </Box>
        </Box>
    )
}

function MetricCell({ device, before, after, board }) {
    const delta = after - before
    const good = after >= 90
    const afterColor = good ? board.good : board.warn

    return (
        <Box
            role="group"
            aria-label={`${device}: было ${before}, стало ${after}`}
            sx={{ minWidth: 0 }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                <Box component="span" sx={{ ...kickerSx, fontSize: '9px', color: board.faint }}>
                    {device}
                </Box>
                <Box
                    component="span"
                    sx={{
                        px: '7px',
                        py: '3px',
                        borderRadius: '999px',
                        bgcolor: board.deltaBg,
                        color: board.delta,
                        fontFamily: 'var(--joy-fontFamily-body)',
                        fontSize: '9px',
                        fontWeight: 500,
                        lineHeight: 1,
                        fontVariantNumeric: 'tabular-nums',
                    }}
                >
                    +{delta}
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) auto minmax(0, 1.18fr)',
                    alignItems: 'end',
                    gap: '7px',
                    mt: '9px',
                }}
            >
                <Box
                    sx={{
                        p: '7px 8px',
                        borderRadius: '9px',
                        bgcolor: 'rgba(255, 255, 255, .045)',
                        border: '1px solid rgba(255, 255, 255, .075)',
                    }}
                >
                    <Box
                        component="span"
                        sx={{ ...kickerSx, display: 'block', fontSize: '8px', color: board.faint }}
                    >
                        Было
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            mt: '4px',
                            fontFamily: 'var(--joy-fontFamily-body)',
                            fontSize: 'clamp(22px, 2.2vw, 30px)',
                            fontWeight: 400,
                            lineHeight: 1,
                            letterSpacing: '-0.04em',
                            color: 'rgba(239, 246, 239, .58)',
                            fontVariantNumeric: 'tabular-nums',
                        }}
                    >
                        {before}
                    </Box>
                </Box>

                <ArrowRight
                    size={12}
                    weight="bold"
                    color={board.faint}
                    aria-hidden="true"
                    style={{ marginBottom: '11px' }}
                />

                <Box
                    sx={{
                        p: '8px 9px',
                        borderRadius: '9px',
                        bgcolor: good ? 'rgba(162, 232, 186, .08)' : 'rgba(244, 196, 122, .08)',
                        border: '1px solid',
                        borderColor: good ? 'rgba(162, 232, 186, .18)' : 'rgba(244, 196, 122, .18)',
                    }}
                >
                    <Box
                        component="span"
                        sx={{ ...kickerSx, display: 'block', fontSize: '8px', color: afterColor }}
                    >
                        Стало
                    </Box>
                    <Box
                        component="span"
                        sx={{
                            display: 'block',
                            mt: '3px',
                            fontFamily: 'var(--joy-fontFamily-body)',
                            fontSize: 'clamp(32px, 3.4vw, 44px)',
                            fontWeight: 500,
                            lineHeight: 0.95,
                            letterSpacing: '-0.05em',
                            color: afterColor,
                            fontVariantNumeric: 'tabular-nums',
                        }}
                    >
                        {after}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function PreviewBrowser({ palette }) {
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const [activeIndex, setActiveIndex] = useState(0)
    const activePage = browserPages[activeIndex]
    const preview = dark ? activePage.dark : activePage.light
    const sectionRef = useRef(null)
    const viewRef = useRef(null)
    const imageRef = useRef(null)
    const progressRef = useRef(0)
    const tabListRef = useRef(null)
    const tabRefs = useRef([])
    const [tabIndicator, setTabIndicator] = useState({ left: 0, width: 0 })

    useLayoutEffect(() => {
        const list = tabListRef.current
        const tab = tabRefs.current[activeIndex]

        if (!list || !tab) return undefined

        let active = true

        const measure = () => {
            if (!active) return
            setTabIndicator({ left: tab.offsetLeft, width: tab.offsetWidth })
        }

        measure()

        const observer = new ResizeObserver(measure)
        observer.observe(list)
        observer.observe(tab)
        window.addEventListener('resize', measure)

        if (document.fonts?.ready) {
            document.fonts.ready.then(measure)
        }

        return () => {
            active = false
            observer.disconnect()
            window.removeEventListener('resize', measure)
        }
    }, [activeIndex])

    const update = useCallback(() => {
        const section = sectionRef.current
        const image = imageRef.current
        const view = viewRef.current

        if (!section || !image || !view) return

        const range = section.offsetHeight - window.innerHeight
        if (range <= 0) return

        const progress = Math.min(
            1,
            Math.max(0, -section.getBoundingClientRect().top / range),
        )
        const maxShift = Math.max(0, image.offsetHeight - view.clientHeight)

        progressRef.current = progress
        image.style.transform = `translate3d(0, ${-progress * maxShift}px, 0)`
    }, [])

    useEffect(() => {
        let frame = 0

        const onScroll = () => {
            if (!frame) {
                frame = window.requestAnimationFrame(() => {
                    frame = 0
                    update()
                })
            }
        }

        update()
        window.addEventListener('scroll', onScroll, { passive: true })
        window.addEventListener('resize', onScroll)

        const observer = new ResizeObserver(onScroll)
        if (viewRef.current) observer.observe(viewRef.current)
        if (sectionRef.current) observer.observe(sectionRef.current)

        return () => {
            window.cancelAnimationFrame(frame)
            window.removeEventListener('scroll', onScroll)
            window.removeEventListener('resize', onScroll)
            observer.disconnect()
            if (imageRef.current) imageRef.current.style.transform = ''
        }
    }, [update])

    const selectPage = (index) => {
        setActiveIndex(index)

        if (progressRef.current > 0.025 && sectionRef.current) {
            const top = sectionRef.current.getBoundingClientRect().top + window.scrollY
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    const handleTabKeyDown = (event, index) => {
        if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return

        event.preventDefault()

        const direction = event.key === 'ArrowRight' ? 1 : -1
        const nextIndex = (index + direction + browserPages.length) % browserPages.length
        selectPage(nextIndex)
        document.getElementById(`izobr-tab-${browserPages[nextIndex].id}`)?.focus()
    }

    return (
        <Box
            ref={sectionRef}
            id="site-preview"
            sx={{
                position: 'relative',
                height: { xs: '190vh', md: '280vh' },
            }}
        >
            <Box
                sx={{
                    position: 'sticky',
                    top: 0,
                    display: 'flex',
                    alignItems: 'center',
                    height: '100svh',
                    pt: { xs: '20px', md: 'clamp(70px, 8vh, 100px)' },
                    pb: { xs: '14px', md: '20px' },
                }}
            >
                <Box sx={{ width: '100%' }}>
                    <Box
                        ref={tabListRef}
                        role="tablist"
                        aria-label="Страницы сайта Изобретариум"
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            gap: '2px',
                            width: 'fit-content',
                            maxWidth: '100%',
                            mb: '24px',
                            p: '4px',
                            borderRadius: '999px',
                            border: '1px solid',
                            borderColor: palette.line,
                            bgcolor: palette.panel,
                            overflowX: 'auto',
                            scrollbarWidth: 'none',
                            '&::-webkit-scrollbar': { display: 'none' },
                            mx: 'auto',
                        }}
                    >
                        <Box
                            aria-hidden="true"
                            sx={{
                                position: 'absolute',
                                top: '4px',
                                bottom: '4px',
                                left: 0,
                                width: `${tabIndicator.width}px`,
                                borderRadius: '999px',
                                bgcolor: palette.tabActiveBg,
                                opacity: tabIndicator.width ? 1 : 0,
                                pointerEvents: 'none',
                                transform: `translate3d(${tabIndicator.left}px, 0, 0)`,
                                transition: 'transform .36s cubic-bezier(.22, 1, .36, 1), width .36s cubic-bezier(.22, 1, .36, 1)',
                            }}
                        />
                        {browserPages.map((page, index) => {
                            const active = index === activeIndex

                            return (
                                <Box
                                    component="button"
                                    type="button"
                                    role="tab"
                                    id={`izobr-tab-${page.id}`}
                                    key={page.id}
                                    ref={(element) => {
                                        tabRefs.current[index] = element
                                    }}
                                    aria-selected={active}
                                    aria-controls="izobr-browser-panel"
                                    tabIndex={active ? 0 : -1}
                                    onClick={() => selectPage(index)}
                                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                                    sx={{
                                        position: 'relative',
                                        zIndex: 1,
                                        appearance: 'none',
                                        flexShrink: 0,
                                        m: 0,
                                        px: { xs: '11px', md: '13px' },
                                        py: '8px',
                                        border: 0,
                                        borderRadius: '999px',
                                        bgcolor: 'transparent',
                                        color: active ? palette.tabActiveText : palette.muted,
                                        fontFamily: 'var(--joy-fontFamily-body)',
                                        fontSize: '16px',
                                        fontWeight: active ? 500 : 400,
                                        lineHeight: 1,
                                        whiteSpace: 'nowrap',
                                        cursor: 'pointer',
                                        transition: 'color .2s ease',
                                        '&:hover': {
                                            color: active ? palette.tabActiveText : palette.ink,
                                        },
                                        '&:focus-visible': {
                                            outline: '1px solid',
                                            outlineColor: palette.ink,
                                            outlineOffset: '2px',
                                        },
                                    }}
                                >
                                    {page.label}
                                </Box>
                            )
                        })}
                    </Box>

                    <Box
                        role="tabpanel"
                        id="izobr-browser-panel"
                        aria-labelledby={`izobr-tab-${activePage.id}`}
                    >
                        <CaseBrowser
                            url={`izobretarium.ru${activePage.path}`}
                            title={activePage.title}
                            dark={palette.browserDark}
                            favicon={(
                                <IzobretariumLogo
                                    style={{ width: '12px', height: '10px', color: palette.green }}
                                />
                            )}
                            viewportSx={{
                                height: {
                                    xs: 'clamp(440px, 66svh, 560px)',
                                    sm: 'clamp(420px, 56svh, 640px)',
                                    md: 'clamp(420px, 64svh, 920px)',
                                },
                            }}
                        >
                            <Box
                                ref={viewRef}
                                sx={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
                            >
                                <Box
                                    component="img"
                                    key={`${activePage.id}-${dark ? 'dark' : 'light'}`}
                                    ref={imageRef}
                                    src={preview.src}
                                    srcSet={preview.srcSet}
                                    sizes="(min-width: 1200px) 1400px, 92vw"
                                    alt={activePage.alt}
                                    loading={activeIndex === 0 ? 'eager' : 'lazy'}
                                    decoding="async"
                                    onLoad={update}
                                    draggable={false}
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto',
                                        transform: 'translate3d(0, 0, 0)',
                                        willChange: 'transform',
                                    }}
                                />
                            </Box>
                        </CaseBrowser>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function AdminScreenshot({ palette, dark }) {
    const [loadedSrc, setLoadedSrc] = useState(null)
    const src = dark ? adminScreenshots.dark : adminScreenshots.light
    const loaded = loadedSrc === src

    return (
        <Box
            sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: { xs: '16px', md: '20px' },
                border: '1px solid',
                borderColor: palette.line,
                bgcolor: palette.panel,
            }}
        >
            {!loaded ? (
                <Box
                    sx={{
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        aspectRatio: { xs: '4 / 3', md: '16 / 9' },
                        px: '24px',
                        textAlign: 'center',
                    }}
                >
                    <Box
                        aria-hidden="true"
                        sx={{
                            position: 'absolute',
                            inset: '12px',
                            borderRadius: '13px',
                            border: '1px dashed',
                            borderColor: palette.line,
                            pointerEvents: 'none',
                        }}
                    />
                    <Box
                        sx={{
                            display: 'grid',
                            placeItems: 'center',
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            bgcolor: palette.greenSoft,
                            color: palette.green,
                        }}
                    >
                        <ImageIcon size={21} weight="regular" aria-hidden="true" />
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '14px',
                                fontWeight: 500,
                                color: palette.ink,
                            }}
                        >
                            Скриншот панели администраторов
                        </Box>
                        <Box
                            sx={{
                                mt: '6px',
                                ...kickerSx,
                                fontSize: '9px',
                                color: palette.faint,
                            }}
                        >
                            Изображение появится здесь
                        </Box>
                    </Box>
                </Box>
            ) : null}

            <Box
                component="img"
                src={src}
                alt="Панель администраторов сайта Изобретариум: новости, программы и мероприятия"
                aria-hidden={!loaded}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoadedSrc(src)}
                sx={{
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                    opacity: loaded ? 1 : 0,
                    position: loaded ? 'relative' : 'absolute',
                    inset: loaded ? 'auto' : 0,
                    pointerEvents: 'none',
                    zIndex: 1,
                }}
            />
        </Box>
    )
}

export default function IzobretariumProjectPage() {
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const p = getPalette(dark)
    const board = {
        bg: '#12251a',
        ink: '#eff6ef',
        muted: 'rgba(239, 246, 239, .6)',
        faint: 'rgba(239, 246, 239, .38)',
        line: 'rgba(255, 255, 255, .1)',
        track: 'rgba(255, 255, 255, .1)',
        good: '#a2e8ba',
        warn: '#f4c47a',
        delta: '#b9efcb',
        deltaBg: 'rgba(162, 232, 186, .12)',
        green: p.green,
        orange: p.orange,
    }

    return (
        <Box
            component="main"
            sx={{
                position: 'relative',
                zIndex: 1,
                bgcolor: p.page,
                color: p.ink,
                fontFamily: 'var(--joy-fontFamily-body)',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    pt: { xs: 'clamp(92px, 14vw, 120px)', md: 'clamp(120px, 12vw, 168px)' },
                }}
            >

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.1fr) minmax(0, .9fr)' },
                        gap: { xs: '30px', lg: 'clamp(40px, 6vw, 96px)' },
                        alignItems: 'end',
                        pt: { xs: '30px', md: 'clamp(38px, 5vw, 64px)' },
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '14px',
                                width: { xs: '140px', sm: '170px', md: '200px' },
                            }}
                        >
                            <IzobretariumLogo style={{ width: '100%', height: 'auto' }} />
                        </Box>

                        <Box
                            component="h1"
                            sx={{
                                m: 0,
                                mt: { xs: '18px', md: '26px' },
                                fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                                fontSize: 'clamp(3.3rem, 8.4vw, 8.2rem)',
                                fontWeight: 500,
                                lineHeight: 0.85,
                                letterSpacing: '-0.06em',
                                color: p.ink,
                                textWrap: 'balance',
                                mb: { xs: '24px', md: '48px' }
                            }}
                        >
                            Изобретариум
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: { xs: '22px', md: '30px' },
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: 'clamp(19px, 2.1vw, 28px)',
                                fontWeight: 400,
                                lineHeight: 1.18,
                                letterSpacing: '-0.025em',
                                color: p.ink,
                                textWrap: 'balance',
                            }}
                        >
                            Крупнейший детский технопарк Московской области.
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ pt: { xs: 5, md: 12 } }}>
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            gap: { xs: '26px', md: 'clamp(28px, 3.4vw, 52px)' },
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Box
                                component="p"
                                sx={{
                                    m: 0,
                                    fontSize: 'clamp(15px, 1.2vw, 17px)',
                                    lineHeight: 1.65,
                                    color: p.muted,
                                    maxWidth: '48ch',
                                }}
                            >
                                Сайт крупнейшего детского технопарка Московской области получил новый визуальный стиль, понятные сценарии использования и удобную панель управления для администраторов.
                            </Box>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '14px 26px', mt: '26px' }}>
                                <Box
                                    component="a"
                                    href="https://izobretarium.ru"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        ...linkSx,
                                        color: p.ink,
                                        '&:hover .izobr-arrow': { transform: 'translate(4px, -4px)' },
                                        '&:hover': { opacity: 1 },
                                    }}
                                >
                                    Открыть сайт
                                    <ArrowUpRight
                                        className="izobr-arrow"
                                        size={15}
                                        weight="light"
                                        aria-hidden="true"
                                        style={{ transition: 'transform .5s cubic-bezier(.22,1,.36,1)' }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', flex: 1 }}>
                            <Box
                                component="dl"
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: 'repeat(2, minmax(0, 1fr))',
                                        md: 'repeat(2, minmax(0, max-content))',
                                    },
                                    columnGap: { xs: '16px', md: 'clamp(28px, 3vw, 44px)' },
                                    rowGap: '18px',
                                    justifyContent: 'start',
                                    m: 0,
                                }}
                            >
                                {[
                                    ['Роль', 'Дизайн и разработка'],
                                    ['Платформа', 'Веб-сайт'],
                                    ['Стек', 'React'],
                                    ['Статус', 'В продакшене'],
                                ].map(([term, value]) => (
                                    <Box key={term}>
                                        <Box
                                            component="dt"
                                            sx={{
                                                ...kickerSx,
                                                fontSize: '9px',
                                                color: p.faint
                                            }}
                                        >
                                            {term}
                                        </Box>
                                        <Box
                                            component="dd"
                                            sx={{
                                                m: 0,
                                                mt: '6px',
                                                fontFamily: 'var(--joy-fontFamily-body)',
                                                fontSize: '13px',
                                                fontWeight: 500,
                                                lineHeight: 1.35,
                                                color: p.ink,
                                            }}
                                        >
                                            {value}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ mt: { xs: '34px', md: 'clamp(48px, 6vw, 80px)' } }}>
                    <PreviewBrowser palette={p} />
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'minmax(0, .65fr) repeat(2, minmax(0, 1fr))' },
                        gap: { xs: '30px', md: 'clamp(32px, 5vw, 72px)' },
                        alignItems: 'end',
                        mt: { xs: 'clamp(54px, 8vw, 80px)', md: 'clamp(72px, 9vw, 120px)' },
                        py: { xs: '30px', md: 'clamp(32px, 4vw, 52px)' },
                        borderTop: '1px solid',
                        borderBottom: '1px solid',
                        borderColor: p.line,
                    }}
                >
                    <Box>
                        <Box sx={{ ...kickerSx, color: p.faint }}>Сайт в цифрах</Box>
                        <Box
                            sx={{
                                mt: '10px',
                                maxWidth: '22ch',
                                fontSize: '13px',
                                lineHeight: 1.5,
                                color: p.muted,
                            }}
                        >
                            Технопарк, куда приходят учиться, и сайт, через который туда
                            попадают.
                        </Box>
                    </Box>
                    <Stat value="2 500" label="учащихся занимаются <nobr>в технопарке</nobr>" palette={p} />
                    <Stat value="500" label="человек заходят <nobr>на сайт</nobr> каждый месяц" palette={p} />
                </Box>
            </Box>

            <Box
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    mt: { xs: 'clamp(54px, 9vw, 84px)', md: 'clamp(80px, 9vw, 124px)' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'start',
                        justifyContent: 'space-between',
                        gap: '18px 40px',
                        mb: { xs: '24px', md: '34px' },
                    }}
                >
                    <Box>
                        <Box
                            component="h2"
                            sx={{
                                m: 0,
                                mt: '12px',
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(2rem, 4.6vw, 4rem)',
                                fontWeight: 400,
                                lineHeight: 0.95,
                                letterSpacing: '-0.045em',
                                color: p.ink,
                                maxWidth: '12ch'
                            }}
                        >
                            Статистика производительности
                        </Box>
                    </Box>
                    <Box sx={{ maxWidth: '42ch' }}>
                        <Box
                            component="p"
                            sx={{ m: 0, fontSize: '14px', lineHeight: 1.55, color: p.muted }}
                        >
                            Улучшение производительности и поисковой оптимизации предыдущей и новой версий сайта на основе данных с PageSpeed Insights.
                        </Box>
                        <Box
                            component="span"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                mt: '14px',
                                px: '10px',
                                py: '6px',
                                borderRadius: '999px',
                                bgcolor: p.greenSoft,
                                color: p.green,
                                ...kickerSx,
                                fontSize: '9px',
                            }}
                        >
                            <TrendUp size={12} weight="bold" aria-hidden="true" />
                            8 из 8 показателей выросли
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        p: { xs: '20px', sm: 'clamp(24px, 3.4vw, 46px)' },
                        borderRadius: { xs: '20px', md: '28px' },
                        bgcolor: board.bg,
                        color: board.ink,
                        overflow: 'hidden',
                    }}
                >

                    {metrics.map((metric) => (
                        <Box
                            key={metric.label}
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1.15fr) minmax(0, .9fr) minmax(0, .9fr)' },
                                gap: { xs: '14px', md: 'clamp(24px, 4vw, 56px)' },
                                alignItems: 'center',
                                py: { xs: '20px', md: 'clamp(22px, 2.2vw, 30px)' },
                                borderBottom: '1px solid',
                                borderColor: board.line,
                                '&:last-of-type': { borderBottom: 0, pb: '4px' },
                            }}
                        >
                            <Box
                                sx={{
                                    fontFamily: 'var(--joy-fontFamily-body)',
                                    fontSize: { xs: '15px', md: '16px' },
                                    fontWeight: 500,
                                    lineHeight: 1.35,
                                    letterSpacing: '-0.01em',
                                    color: board.ink,
                                }}
                            >
                                {metric.label}
                            </Box>
                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                                    gap: '16px',
                                    gridColumn: { md: 'span 2' },
                                }}
                            >
                                <MetricCell
                                    device="Компьютер"
                                    before={metric.before[0]}
                                    after={metric.after[0]}
                                    board={board}
                                />
                                <MetricCell
                                    device="Мобильный"
                                    before={metric.before[1]}
                                    after={metric.after[1]}
                                    board={board}
                                />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    mt: { xs: 'clamp(64px, 10vw, 96px)', md: 'clamp(96px, 12vw, 160px)' },
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .55fr) minmax(0, 1.45fr)' },
                        gap: { xs: '26px', lg: 'clamp(40px, 7vw, 110px)' },
                    }}
                >
                    <Box>
                        <Box sx={{ ...kickerSx, color: p.orange }}>Под капотом</Box>
                        <Box
                            component="h2"
                            sx={{
                                m: 0,
                                mt: '12px',
                                maxWidth: '12ch',
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(2rem, 4.4vw, 3.8rem)',
                                fontWeight: 400,
                                lineHeight: 0.98,
                                letterSpacing: '-0.045em',
                                color: p.ink,
                            }}
                        >
                            Что переработали
                        </Box>
                    </Box>

                    <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0 }}>
                        {changes.map((item, index) => (
                            <Box
                                component="li"
                                key={item.title}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '40px minmax(0, 1fr)', md: '78px minmax(0, 1fr)' },
                                    gap: { xs: '14px', md: '26px' },
                                    py: { xs: '22px', md: 'clamp(24px, 2.6vw, 34px)' },
                                    borderTop: '1px solid',
                                    borderColor: p.line,
                                    '&:last-of-type': {
                                        borderBottom: '1px solid',
                                        borderColor: p.line,
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        fontFamily: 'var(--joy-fontFamily-body)',
                                        fontSize: '11px',
                                        fontWeight: 500,
                                        letterSpacing: '0.08em',
                                        color: p.orange,
                                        pt: '5px',
                                    }}
                                >
                                    0{index + 1}
                                </Box>
                                <Box>
                                    <Box
                                        component="h3"
                                        sx={{
                                            m: 0,
                                            fontFamily: 'var(--joy-fontFamily-body)',
                                            fontSize: 'clamp(20px, 2.2vw, 27px)',
                                            fontWeight: 500,
                                            lineHeight: 1.15,
                                            letterSpacing: '-0.03em',
                                            color: p.ink,
                                        }}
                                    >
                                        {item.title}
                                    </Box>
                                    <Box
                                        component="p"
                                        sx={{
                                            m: 0,
                                            mt: '10px',
                                            maxWidth: '54ch',
                                            fontSize: 'clamp(14px, 1.1vw, 16px)',
                                            lineHeight: 1.65,
                                            color: p.muted,
                                        }}
                                    >
                                        {item.text}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    mt: { xs: 'clamp(64px, 10vw, 96px)', md: 'clamp(96px, 12vw, 160px)' },
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1fr) minmax(0, .8fr)' },
                        gap: { xs: '20px', lg: 'clamp(32px, 6vw, 90px)' },
                        alignItems: 'start',
                        mb: { xs: '26px', md: '38px' },
                    }}
                >
                    <Box
                        component="h2"
                        sx={{
                            m: 0,
                            maxWidth: '15ch',
                            fontFamily: 'var(--joy-fontFamily-display)',
                            fontSize: 'clamp(2rem, 4.6vw, 4rem)',
                            fontWeight: 400,
                            lineHeight: 0.96,
                            letterSpacing: '-0.045em',
                            color: p.ink,
                        }}
                    >
                        Панель администраторов
                    </Box>
                    <Box>
                        <Box
                            component="p"
                            sx={{ m: 0, maxWidth: '46ch', fontSize: '15px', lineHeight: 1.6, color: p.muted }}
                        >
                            Новости, образовательные программы и мероприятия обновляются через собственную панель управления. Полный контроль над контентом с удобными инструментами и сохранением в черновики.
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', mt: '18px' }}>
                            {[
                                { label: 'Новости', icon: NewspaperClipping },
                                { label: 'Программы', icon: BookOpen },
                                { label: 'Мероприятия', icon: CalendarDots },
                            ].map((item) => {
                                const Icon = item.icon
                                return (
                                    <Box
                                        component="span"
                                        key={item.label}
                                        sx={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            px: '10px',
                                            py: '7px',
                                            borderRadius: '999px',
                                            border: '1px solid',
                                            borderColor: p.line,
                                            color: p.muted,
                                            ...kickerSx,
                                            fontSize: '9px',
                                            letterSpacing: '0.09em',
                                        }}
                                    >
                                        <Icon size={12} aria-hidden="true" />
                                        {item.label}
                                    </Box>
                                )
                            })}
                        </Box>
                    </Box>
                </Box>

                <AdminScreenshot palette={p} dark={dark} />
            </Box>

            <Box
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    mt: { xs: 'clamp(64px, 10vw, 96px)', md: 'clamp(96px, 12vw, 150px)' },
                    pb: { xs: 'clamp(64px, 10vw, 96px)', md: 'clamp(80px, 10vw, 130px)' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                        gap: '24px 40px',
                        pt: { xs: '24px', md: '34px' },
                        borderTop: '1px solid',
                        borderColor: p.line,
                    }}
                >
                    <Box>
                        <Box
                            component="a"
                            href="https://izobretarium.ru"
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 'clamp(10px, 1.4vw, 18px)',
                                mt: '14px',
                                color: p.ink,
                                textDecoration: 'none',
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(2rem, 4.6vw, 4.4rem)',
                                fontWeight: 400,
                                lineHeight: 0.95,
                                letterSpacing: '-0.05em',
                                '&:hover .izobr-final-arrow': { transform: 'translate(6px, -6px)' },
                            }}
                        >
                            izobretarium.ru
                            <ArrowUpRight
                                className="izobr-final-arrow"
                                size={34}
                                weight="light"
                                aria-hidden="true"
                                style={{ transition: 'transform .5s cubic-bezier(.22,1,.36,1)' }}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
