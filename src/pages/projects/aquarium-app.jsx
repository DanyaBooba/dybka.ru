import Box from '@mui/joy/Box'
import { useColorScheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ArrowUpRight,
    Bell,
    Image as ImageIcon,
    PhoneCall,
    PlugsConnected,
} from '@phosphor-icons/react'
import AquariumLogo from '../../components/aquarium-logo'
import AquariumMark from '../../components/aquarium-mark'

const getPalette = (dark) => dark
    ? {
        page: '#121212',
        ink: '#eafaf8',
        heading: '#ffffff',
        muted: 'rgba(234, 250, 248, .66)',
        faint: 'rgba(234, 250, 248, .42)',
        line: 'rgba(234, 250, 248, .13)',
        card: '#0b2422',
        mint: '#10302d',
        teal: '#45d9d2',
        tealFill: '#14c4be',
    }
    : {
        page: '#f8fafc',
        ink: '#072b29',
        heading: '#000000',
        muted: 'rgba(7, 43, 41, .64)',
        faint: 'rgba(7, 43, 41, .43)',
        line: 'rgba(7, 43, 41, .12)',
        card: '#ffffff',
        mint: '#def6f3',
        teal: '#087b76',
        tealFill: '#0fbab5',
    }

const inter = "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"

const kickerSx = {
    fontFamily: inter,
    fontSize: '10px',
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
}

const buttonBase = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '9px',
    minHeight: '48px',
    px: '24px',
    borderRadius: '999px',
    fontFamily: inter,
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: 1,
    textDecoration: 'none',
    transition: 'transform .3s cubic-bezier(.22,1,.36,1), background-color .25s ease, color .25s ease, border-color .25s ease',
    '&:hover': { transform: 'translateY(-2px)' },
}

const sectionSx = {
    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
    py: { xs: 'clamp(44px, 7vw, 60px)', md: 'clamp(56px, 6.5vw, 96px)' },
}

const sectionTitleSx = (p) => ({
    m: 0,
    fontFamily: inter,
    fontSize: 'clamp(2rem, 4.2vw, 4rem)',
    fontWeight: 600,
    lineHeight: 0.98,
    letterSpacing: '-0.05em',
    color: p.heading,
    textWrap: 'balance',
})

const sectionTextSx = (p) => ({
    m: 0,
    mt: '18px',
    maxWidth: '46ch',
    fontFamily: inter,
    fontSize: 'clamp(14.5px, 1.2vw, 16px)',
    lineHeight: 1.65,
    color: p.muted,
})

const milestones = [
    {
        period: 'Месяц 1',
        title: 'Проектирование',
        text: 'Структура экранов, навигация и дизайн-система будущего приложения.',
    },
    {
        period: 'Месяцы 2–3',
        title: 'Ядро',
        text: 'Чаты, лента, авторизация и синхронизация с веб-версией.',
    },
    {
        period: 'Месяцы 4–5',
        title: 'Звонки и медиа',
        text: 'Аудио- и видеозвонки, файлы, стикеры и уведомления.',
    },
    {
        period: 'Месяц 6',
        title: 'Релиз',
        text: 'Тестирование, исправления и публикация в маркетах.',
    },
]

const appFeatures = [
    {
        icon: PlugsConnected,
        title: 'Синхронизация',
        text: 'Начните в браузере, продолжите на телефоне — чаты, лента и вложения всегда рядом.',
    },
    {
        icon: PhoneCall,
        title: 'Звонки',
        text: 'Аудио- и видеозвонки прямо из чата, без переключения между приложениями.',
    },
    {
        icon: Bell,
        title: 'Уведомления',
        text: 'Пуши о новых сообщениях и звонках, чтобы не держать приложение открытым.',
    },
    {
        icon: ImageIcon,
        title: 'Медиа',
        text: 'Фотографии, файлы и стикеры в одном разговоре — ничего не теряется.',
    },
]

const anatomy = [
    {
        label: 'Клиент',
        title: 'React Native и Expo',
        text: 'Одна кодовая база для iOS и Android: интерфейс, навигация и логика общие.',
    },
    {
        label: 'Звонки',
        title: 'WebRTC и CallKeep',
        text: 'Звонок начинается из чата, а система показывает входящий как обычный вызов.',
    },
    {
        label: 'Уведомления',
        title: 'Firebase и Notifee',
        text: 'Пуши приходят, даже когда приложение закрыто, и открывают нужный чат.',
    },
    {
        label: 'Данные',
        title: 'TanStack Query',
        text: 'Кеш и фоновая синхронизация: лента и чаты открываются сразу, без ожидания сети.',
    },
]

const screens = [
    {
        src: '/img/pages/aquarium/iphone.png',
        width: 960,
        height: 1981,
        alt: 'Чат в приложении «Аквариум» на iPhone: сообщения, вложение и отметки о прочтении',
        platform: 'iOS',
        title: 'Чат и вложения',
        text: 'Переписка с фото, файлами и стикерами — как в веб-версии.',
    },
    {
        src: '/img/pages/aquarium/android.png',
        width: 841,
        height: 1748,
        alt: 'Видеозвонок в приложении «Аквариум» на Android: собеседник на весь экран и кнопки управления',
        platform: 'Android',
        title: 'Видеозвонок',
        text: 'Аудио и видео прямо из чата: микрофон, камера и завершение вызова.',
    },
]

const lightThemes = [
    { name: 'Стандартная', bg: '#f8fafc', accent: '#1c807d' },
    { name: 'Океан', bg: '#f8fafc', accent: '#0a6bcb' },
    { name: 'Летний закат', bg: '#faf5eb', accent: '#ff6f61' },
    { name: 'Лесная гармония', bg: '#eef8f3', accent: '#2e8b57' },
    { name: 'Лавандовый раф', bg: '#f9f6ff', accent: '#9a8fdd' },
    { name: 'Песчаные дюны', bg: '#fbf5ee', accent: '#d2b48c' },
    { name: 'Арктический лёд', bg: '#f4fafc', accent: '#3f9db8' },
    { name: 'Клубника', bg: '#fff0f5', accent: '#ff6f91' },
    { name: 'Золотой закат', bg: '#fff9ee', accent: '#ffaa00' },
    { name: 'Городские огни', bg: '#f5f5f5', accent: '#ffa500' },
    { name: 'Лунная ночь', bg: '#f5f5f5', accent: '#6c5b7b' },
]

const darkThemes = [
    { name: 'Тёмная стандартная', bg: '#121212', accent: '#3fa6a3' },
    { name: 'Глубины океана', bg: '#0f101a', accent: '#3390c8' },
    { name: 'Ночной закат', bg: '#1c1b20', accent: '#c75b4e' },
    { name: 'Тайный лес', bg: '#0c0e0b', accent: '#2a7f2a' },
    { name: 'Звёздная лаванда', bg: '#2b2738', accent: '#b39eb5' },
    { name: 'Тёмные дюны', bg: '#2c2c2c', accent: '#c9a775' },
    { name: 'Полярная ночь', bg: '#1e2a3a', accent: '#66a6b3' },
    { name: 'Тёмная клубника', bg: '#2e1e1e', accent: '#d94a64' },
    { name: 'Золотая полночь', bg: '#1e1e1e', accent: '#d4af37' },
    { name: 'Ночной город', bg: '#121212', accent: '#ff8c00' },
    { name: 'Лунная тень', bg: '#0a0a0a', accent: '#8a5c72' },
]

function ThemePreview({ theme }) {
    return (
        <Box
            title={theme.name}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '4px',
                width: '52px',
                height: '52px',
                px: '9px',
                borderRadius: '14px',
                bgcolor: theme.bg,
                border: '1px solid',
                borderColor: 'rgba(127, 127, 127, .22)',
                overflow: 'hidden',
            }}
        >
            <Box
                aria-hidden="true"
                sx={{ width: '28px', height: '8px', borderRadius: '4px', bgcolor: theme.accent }}
            />
            <Box
                aria-hidden="true"
                sx={{
                    width: '20px',
                    height: '8px',
                    ml: 'auto',
                    borderRadius: '4px',
                    bgcolor: theme.accent,
                    opacity: 0.45,
                }}
            />
        </Box>
    )
}

function FeatureCard({ p, icon: Icon, title, text }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                p: { xs: '22px', md: 'clamp(24px, 2.4vw, 32px)' },
                borderRadius: '24px',
                bgcolor: p.card,
            }}
        >
            <Box
                aria-hidden="true"
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    bgcolor: p.mint,
                    color: p.teal,
                }}
            >
                <Icon size={28} weight="fill" />
            </Box>
            <Box
                component="h3"
                sx={{
                    m: 0,
                    mt: '18px',
                    fontFamily: inter,
                    fontSize: 'clamp(17px, 1.5vw, 19px)',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    letterSpacing: '-0.02em',
                    color: p.heading,
                }}
            >
                {title}
            </Box>
            <Box
                component="p"
                sx={{
                    m: 0,
                    mt: '7px',
                    maxWidth: '32ch',
                    fontFamily: inter,
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    color: p.muted,
                }}
            >
                {text}
            </Box>
        </Box>
    )
}

function HeroVisual({ dark }) {
    const phoneShadow = dark
        ? 'drop-shadow(0 40px 70px rgba(0, 0, 0, .55))'
        : 'drop-shadow(0 40px 70px rgba(0, 0, 0, .45))'

    return (
        <Box
            sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minWidth: 0,
                minHeight: { xs: '500px', md: '640px' },
            }}
        >
            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    width: { xs: '300px', md: '460px' },
                    height: { xs: '300px', md: '460px' },
                    borderRadius: '50%',
                    bgcolor: '#0fbab5',
                    opacity: 0.16,
                    filter: 'blur(90px)',
                    pointerEvents: 'none',
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: { xs: 'min(248px, 62vw)', md: 'clamp(262px, 22vw, 330px)' },
                }}
            >
                <Box
                    component="img"
                    src="/img/pages/aquarium/iphone.png"
                    alt="Чат в приложении «Аквариум» на iPhone: сообщения, вложение и отметки о прочтении"
                    width={960}
                    height={1981}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    sx={{
                        display: 'block',
                        width: '100%',
                        height: 'auto',
                        transform: 'rotate(-2.5deg)',
                        filter: phoneShadow,
                    }}
                />

                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        left: { xs: '-26px', md: '-44px' },
                        bottom: { xs: '44px', md: '64px' },
                        display: 'grid',
                        placeItems: 'center',
                        width: { xs: '48px', md: '68px' },
                        height: { xs: '48px', md: '68px' },
                        borderRadius: { xs: '14px', md: '19px' },
                        bgcolor: '#0fbab5',
                        color: '#ffffff',
                        boxShadow: '0 20px 50px rgba(4, 58, 55, .3)',
                        transform: 'rotate(-8deg)',
                    }}
                >
                    <AquariumMark style={{ width: '62%', height: 'auto' }} />
                </Box>
            </Box>

            <Box
                component="img"
                src="/img/pages/aquarium/android.png"
                alt="Видеозвонок в приложении «Аквариум» на Android"
                width={841}
                height={1748}
                loading="lazy"
                decoding="async"
                sx={{
                    position: 'absolute',
                    zIndex: 3,
                    right: { xs: '1%', md: '1%' },
                    bottom: { xs: '2%', md: '7%' },
                    display: 'block',
                    width: { xs: 'min(136px, 34vw)', md: 'clamp(148px, 13vw, 198px)' },
                    height: 'auto',
                    transform: 'rotate(4deg)',
                    filter: phoneShadow,
                }}
            />

        </Box>
    )
}

export default function AquariumAppProjectPage() {
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const p = getPalette(dark)
    const screenShadow = dark
        ? 'drop-shadow(0 40px 70px rgba(0, 0, 0, .5))'
        : 'drop-shadow(0 40px 70px rgba(4, 58, 55, .16))'

    return (
        <Box
            component="main"
            sx={{
                position: 'relative',
                zIndex: 1,
                bgcolor: p.page,
                color: p.ink,
                fontFamily: inter,
                overflow: 'hidden',
            }}
        >
            <Box
                component="section"
                aria-labelledby="aquarium-app-title"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '100svh',
                    overflow: 'hidden',
                    bgcolor: '#04211f',
                    color: '#eafaf8',
                    backgroundImage:
                        'radial-gradient(900px 540px at 80% 10%, rgba(15, 186, 181, .3), transparent 62%), radial-gradient(620px 460px at 4% 98%, rgba(15, 186, 181, .14), transparent 64%)',
                    pt: { xs: 'clamp(96px, 14vw, 124px)', md: 'clamp(104px, 12vh, 148px)' },
                    pb: { xs: 'clamp(48px, 9vw, 72px)', md: 'clamp(56px, 9vh, 100px)' },
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        right: '-11%',
                        top: '13%',
                        width: 'min(720px, 68vw)',
                        color: '#0fbab5',
                        opacity: 0.055,
                        pointerEvents: 'none',
                    }}
                >
                    <AquariumMark style={{ width: '100%', height: 'auto' }} />
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '1500px',
                        mx: 'auto',
                        px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .92fr) minmax(0, 1.08fr)' },
                        gap: { xs: 'clamp(40px, 8vw, 64px)', lg: 'clamp(40px, 5vw, 80px)' },
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '9px',
                                color: '#7ce8e2',
                                ...kickerSx,
                            }}
                        >
                            <Box
                                aria-hidden="true"
                                sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: '#0fbab5' }}
                            />
                            Приложение · iOS и Android
                        </Box>

                        <Box
                            component="h1"
                            id="aquarium-app-title"
                            sx={{
                                m: 0,
                                mt: '22px',
                                maxWidth: '10ch',
                                fontFamily: inter,
                                fontSize: 'clamp(2.6rem, 5.6vw, 5.2rem)',
                                fontWeight: 600,
                                lineHeight: 0.94,
                                letterSpacing: '-0.055em',
                                color: '#ffffff',
                                textWrap: 'balance',
                            }}
                        >
                            Аквариум всегда под рукой
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: '20px',
                                maxWidth: '42ch',
                                fontFamily: inter,
                                fontSize: 'clamp(14px, 1.2vw, 16px)',
                                lineHeight: 1.65,
                                color: 'rgba(234, 250, 248, .68)',
                            }}
                        >
                            Мессенджер, микроблог и звонки в приложении для iOS и Android.
                            Та же лента и те же чаты, но в телефоне — с уведомлениями
                            и звонками в один тап.
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mt: { xs: '26px', md: '30px' } }}>
                            <Box
                                component="a"
                                href="https://aquarium.org.ru/apps"
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    ...buttonBase,
                                    px: { xs: '18px', md: '24px' },
                                    bgcolor: '#0fbab5',
                                    color: '#032422',
                                    '&:hover': { bgcolor: '#2ed0ca' },
                                }}
                            >
                                Скачать приложение
                            </Box>
                            <Box
                                component={Link}
                                to="/projects/aquarium"
                                sx={{
                                    ...buttonBase,
                                    px: { xs: '18px', md: '24px' },
                                    border: '1px solid',
                                    borderColor: 'rgba(234, 250, 248, .24)',
                                    color: '#eafaf8',
                                    bgcolor: 'rgba(255,255,255,.03)',
                                    backdropFilter: 'blur(10px)',
                                    '&:hover': {
                                        borderColor: 'rgba(234, 250, 248, .5)',
                                        bgcolor: 'rgba(255,255,255,.07)',
                                    },
                                }}
                            >
                                О мессенджере
                                <ArrowRight size={15} weight="bold" aria-hidden="true" />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px',
                                mt: { xs: '26px', md: '32px' },
                                pt: '18px',
                                borderTop: '1px solid',
                                borderColor: 'rgba(234, 250, 248, .13)',
                            }}
                        >
                            {['iOS 15.1+', 'Android', 'React Native'].map((label) => (
                                <Box
                                    component="span"
                                    key={label}
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '7px',
                                        px: '11px',
                                        py: '7px',
                                        borderRadius: '999px',
                                        border: '1px solid',
                                        borderColor: 'rgba(234, 250, 248, .16)',
                                        color: 'rgba(234, 250, 248, .74)',
                                        fontFamily: inter,
                                        fontSize: '10px',
                                        fontWeight: 600,
                                        lineHeight: 1,
                                    }}
                                >
                                    <Box
                                        aria-hidden="true"
                                        sx={{ width: '4px', height: '4px', borderRadius: '50%', bgcolor: '#0fbab5' }}
                                    />
                                    {label}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <HeroVisual dark={dark} />
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-app-story"
                sx={{
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    py: { xs: 'clamp(48px, 8vw, 64px)', md: 'clamp(72px, 8vw, 120px)' },
                }}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .62fr) minmax(0, 1.38fr)' },
                            gap: { xs: '34px', lg: 'clamp(40px, 7vw, 110px)' },
                            alignItems: 'start',
                        }}
                    >
                        <Box sx={{ position: { lg: 'sticky' }, top: { lg: '120px' } }}>
                            <Box sx={{ ...kickerSx, color: p.teal }}>История</Box>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '12px', mt: '10px' }}>
                                <Box
                                    sx={{
                                        fontFamily: inter,
                                        fontSize: 'clamp(5.6rem, 13vw, 11rem)',
                                        fontWeight: 700,
                                        lineHeight: 0.72,
                                        letterSpacing: '-0.09em',
                                        color: p.tealFill,
                                    }}
                                >
                                    6
                                </Box>
                                <Box sx={{ pb: '8px' }}>
                                    <Box
                                        sx={{
                                            fontFamily: inter,
                                            fontSize: 'clamp(17px, 1.7vw, 21px)',
                                            fontWeight: 600,
                                            lineHeight: 1.1,
                                            letterSpacing: '-0.02em',
                                            color: p.heading,
                                        }}
                                    >
                                        месяцев
                                    </Box>
                                    <Box
                                        sx={{
                                            mt: '4px',
                                            fontFamily: inter,
                                            fontSize: '11px',
                                            lineHeight: 1.3,
                                            color: p.faint,
                                        }}
                                    >
                                        от задачи
                                        <br />
                                        до релиза
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    mt: '26px',
                                    maxWidth: '30ch',
                                    fontFamily: inter,
                                    fontSize: '13px',
                                    lineHeight: 1.6,
                                    color: p.muted,
                                }}
                            >
                                Веб-версия уже работала. Оставалось сделать так, чтобы
                                Аквариум удобно жил в телефоне — с той же лентой,
                                чатами и звонками.
                            </Box>
                        </Box>

                        <Box>
                            <Box
                                component="h2"
                                id="aquarium-app-story"
                                sx={{ ...sectionTitleSx(p), maxWidth: '17ch' }}
                            >
                                Веб-версия уже была. Не хватало телефона
                            </Box>
                            <Box component="p" sx={{ ...sectionTextSx(p), maxWidth: '52ch' }}>
                                Нужно было сохранить знакомый интерфейс и добавить то,
                                чего не даёт браузер: быстрый отклик, уведомления
                                и звонки в один тап. Реализовал за 6 месяцев —
                                от проектирования экранов до публикации в маркетах.
                            </Box>

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                                    gap: '12px',
                                    mt: { xs: '30px', md: 'clamp(36px, 5vw, 54px)' },
                                }}
                            >
                                {milestones.map((item, index) => (
                                    <Box
                                        key={item.title}
                                        sx={{
                                            p: { xs: '20px', md: '24px' },
                                            borderRadius: '20px',
                                            bgcolor: p.card,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                                gap: '8px',
                                            }}
                                        >
                                            <Box
                                                component="span"
                                                sx={{
                                                    fontFamily: inter,
                                                    fontSize: '9px',
                                                    fontWeight: 600,
                                                    letterSpacing: '0.1em',
                                                    textTransform: 'uppercase',
                                                    color: p.teal,
                                                }}
                                            >
                                                0{index + 1}
                                            </Box>
                                            <Box
                                                component="span"
                                                sx={{
                                                    fontFamily: inter,
                                                    fontSize: '9px',
                                                    fontWeight: 500,
                                                    color: p.faint,
                                                }}
                                            >
                                                {item.period}
                                            </Box>
                                        </Box>
                                        <Box
                                            component="h3"
                                            sx={{
                                                m: 0,
                                                mt: '12px',
                                                fontFamily: inter,
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                lineHeight: 1.2,
                                                letterSpacing: '-0.02em',
                                                color: p.heading,
                                            }}
                                        >
                                            {item.title}
                                        </Box>
                                        <Box
                                            component="p"
                                            sx={{
                                                m: 0,
                                                mt: '6px',
                                                fontFamily: inter,
                                                fontSize: '12.5px',
                                                lineHeight: 1.5,
                                                color: p.muted,
                                            }}
                                        >
                                            {item.text}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-app-features"
                sx={sectionSx}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: '16px 40px',
                            mb: { xs: '28px', md: 'clamp(36px, 4vw, 52px)' },
                        }}
                    >
                        <Box>
                            <Box sx={{ ...kickerSx, color: p.teal }}>Возможности</Box>
                            <Box
                                component="h2"
                                id="aquarium-app-features"
                                sx={{ ...sectionTitleSx(p), mt: '12px', maxWidth: '14ch' }}
                            >
                                То, чего не хватало в браузере
                            </Box>
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                maxWidth: '34ch',
                                fontFamily: inter,
                                fontSize: '14px',
                                lineHeight: 1.6,
                                color: p.muted,
                            }}
                        >
                            Приложение не заменяет веб-версию, а продолжает её —
                            там, где телефон оказывается под рукой.
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'minmax(0, 1fr)',
                                sm: 'repeat(2, minmax(0, 1fr))',
                                lg: 'repeat(4, minmax(0, 1fr))',
                            },
                            gap: '12px',
                        }}
                    >
                        {appFeatures.map((item) => (
                            <FeatureCard
                                key={item.title}
                                p={p}
                                icon={item.icon}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-app-themes"
                sx={sectionSx}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .82fr) minmax(0, 1.18fr)' },
                            gap: { xs: 'clamp(26px, 6vw, 40px)', lg: 'clamp(40px, 6vw, 100px)' },
                            alignItems: 'center',
                        }}
                    >
                        <Box>
                            <Box
                                component="h2"
                                id="aquarium-app-themes"
                                sx={{ ...sectionTitleSx(p), maxWidth: '13ch' }}
                            >
                                Приложение можно перекрасить
                            </Box>
                            <Box component="p" sx={{ ...sectionTextSx(p), maxWidth: '38ch' }}>
                                В настройках — {lightThemes.length} светлых
                                и {darkThemes.length} тёмных тем: от спокойной
                                «Стандартной» до «Золотой полуночи». Там же меняется
                                иконка приложения — их девять.
                            </Box>
                        </Box>

                        <Box sx={{ display: 'grid', gap: '22px' }}>
                            {[
                                { label: 'Светлые темы', themes: lightThemes },
                                { label: 'Тёмные темы', themes: darkThemes },
                            ].map((row) => (
                                <Box key={row.label}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            mb: '10px',
                                            ...kickerSx,
                                            fontSize: '9px',
                                            color: p.faint,
                                        }}
                                    >
                                        <Box component="span">{row.label}</Box>
                                        <Box
                                            aria-hidden="true"
                                            sx={{ width: '3px', height: '3px', borderRadius: '50%', bgcolor: 'currentColor' }}
                                        />
                                        <Box component="span">{row.themes.length}</Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {row.themes.map((theme) => (
                                            <ThemePreview key={`${row.label}-${theme.name}`} theme={theme} />
                                        ))}
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-app-screens"
                sx={sectionSx}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: '16px 40px',
                            mb: { xs: '30px', md: 'clamp(40px, 5vw, 64px)' },
                        }}
                    >
                        <Box>
                            <Box sx={{ ...kickerSx, color: p.teal }}>Экраны</Box>
                            <Box
                                component="h2"
                                id="aquarium-app-screens"
                                sx={{ ...sectionTitleSx(p), mt: '12px', maxWidth: '12ch' }}
                            >
                                Как это выглядит
                            </Box>
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                maxWidth: '32ch',
                                fontFamily: inter,
                                fontSize: '14px',
                                lineHeight: 1.6,
                                color: p.muted,
                            }}
                        >
                            Чат с файлами и видеозвонок — два экрана, ради которых
                            приложение открывают каждый день.
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                            gap: { xs: '36px', md: 'clamp(40px, 6vw, 80px)' },
                            alignItems: 'end',
                        }}
                    >
                        {screens.map((screen) => (
                            <Box
                                key={screen.title}
                                sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                            >
                                <Box
                                    component="img"
                                    src={screen.src}
                                    width={screen.width}
                                    height={screen.height}
                                    alt={screen.alt}
                                    loading="lazy"
                                    decoding="async"
                                    sx={{
                                        display: 'block',
                                        width: { xs: 'min(260px, 72vw)', md: 'clamp(250px, 22vw, 310px)' },
                                        height: 'auto',
                                        filter: screenShadow,
                                    }}
                                />
                                <Box sx={{ mt: '20px', maxWidth: '30ch', textAlign: 'center' }}>
                                    <Box
                                        sx={{
                                            ...kickerSx,
                                            fontSize: '9px',
                                            color: p.teal,
                                            textTransform: 'none',
                                        }}
                                    >
                                        {screen.platform}
                                    </Box>
                                    <Box
                                        component="h3"
                                        sx={{
                                            m: 0,
                                            mt: '8px',
                                            fontFamily: inter,
                                            fontSize: 'clamp(16px, 1.4vw, 18px)',
                                            fontWeight: 600,
                                            lineHeight: 1.25,
                                            letterSpacing: '-0.02em',
                                            color: p.heading,
                                        }}
                                    >
                                        {screen.title}
                                    </Box>
                                    <Box
                                        component="p"
                                        sx={{
                                            m: 0,
                                            mt: '6px',
                                            fontFamily: inter,
                                            fontSize: '13px',
                                            lineHeight: 1.5,
                                            color: p.muted,
                                        }}
                                    >
                                        {screen.text}
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-app-anatomy"
                sx={sectionSx}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: '16px 40px',
                            mb: { xs: '26px', md: 'clamp(32px, 4vw, 48px)' },
                        }}
                    >
                        <Box>
                            <Box sx={{ ...kickerSx, color: p.teal }}>Под капотом</Box>
                            <Box
                                component="h2"
                                id="aquarium-app-anatomy"
                                sx={{ ...sectionTitleSx(p), mt: '12px', maxWidth: '12ch' }}
                            >
                                Как устроено
                            </Box>
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                maxWidth: '34ch',
                                fontFamily: inter,
                                fontSize: '14px',
                                lineHeight: 1.6,
                                color: p.muted,
                            }}
                        >
                            Коротко о стеке: одна кодовая база, нативные звонки
                            и уведомления, которые работают в фоне.
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
                            columnGap: { xs: 0, md: 'clamp(32px, 5vw, 72px)' },
                        }}
                    >
                        {anatomy.map((item) => (
                            <Box
                                key={item.title}
                                sx={{
                                    py: { xs: '20px', md: '26px' },
                                    borderTop: '1px solid',
                                    borderColor: p.line,
                                }}
                            >
                                <Box sx={{ ...kickerSx, fontSize: '9px', color: p.teal }}>
                                    {item.label}
                                </Box>
                                <Box
                                    component="h3"
                                    sx={{
                                        m: 0,
                                        mt: '10px',
                                        fontFamily: inter,
                                        fontSize: 'clamp(16px, 1.4vw, 18px)',
                                        fontWeight: 600,
                                        lineHeight: 1.25,
                                        letterSpacing: '-0.02em',
                                        color: p.heading,
                                    }}
                                >
                                    {item.title}
                                </Box>
                                <Box
                                    component="p"
                                    sx={{
                                        m: 0,
                                        mt: '7px',
                                        maxWidth: '42ch',
                                        fontFamily: inter,
                                        fontSize: '13.5px',
                                        lineHeight: 1.55,
                                        color: p.muted,
                                    }}
                                >
                                    {item.text}
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-app-download"
                sx={sectionSx}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            borderRadius: { xs: '24px', md: '32px' },
                            bgcolor: '#04211f',
                            color: '#eafaf8',
                            backgroundImage:
                                'radial-gradient(700px 420px at 92% 20%, rgba(15, 186, 181, .32), transparent 62%), linear-gradient(120deg, #04211f 0%, #062b28 100%)',
                            px: { xs: '24px', md: 'clamp(34px, 5vw, 72px)' },
                            py: { xs: 'clamp(30px, 6vw, 48px)', md: 'clamp(48px, 7vw, 86px)' },
                        }}
                    >
                        <Box
                            aria-hidden="true"
                            sx={{
                                position: 'absolute',
                                right: '-4%',
                                bottom: '-16%',
                                width: { xs: '58%', md: '34%' },
                                color: '#0fbab5',
                                opacity: 0.1,
                            }}
                        >
                            <AquariumMark style={{ width: '100%', height: 'auto' }} />
                        </Box>

                        <Box sx={{ position: 'relative', maxWidth: '760px' }}>
                            <Box sx={{ ...kickerSx, color: 'rgba(234, 250, 248, .5)' }}>
                                В маркетах
                            </Box>
                            <Box
                                component="h2"
                                id="aquarium-app-download"
                                sx={{ ...sectionTitleSx(p), mt: '14px', maxWidth: '15ch', color: '#ffffff' }}
                            >
                                Приложение для iOS и Android
                            </Box>
                            <Box
                                component="p"
                                sx={{
                                    m: 0,
                                    mt: '16px',
                                    maxWidth: '38ch',
                                    fontFamily: inter,
                                    fontSize: 'clamp(15px, 1.5vw, 19px)',
                                    lineHeight: 1.5,
                                    color: 'rgba(234, 250, 248, .68)',
                                }}
                            >
                                Скачайте приложение и продолжите разговор там,
                                где остановились. Веб-версия и телефон
                                синхронизируются.
                            </Box>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mt: '26px' }}>
                                <Box
                                    component="a"
                                    href="https://aquarium.org.ru/apps"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        ...buttonBase,
                                        bgcolor: '#0fbab5',
                                        color: '#032422',
                                        '&:hover': { bgcolor: '#2ed0ca' },
                                    }}
                                >
                                    Открыть в маркетах
                                </Box>
                                <Box
                                    component="a"
                                    href="https://aquarium.org.ru"
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        ...buttonBase,
                                        border: '1px solid',
                                        borderColor: 'rgba(234, 250, 248, .24)',
                                        color: '#eafaf8',
                                        '&:hover': { borderColor: 'rgba(234, 250, 248, .5)' },
                                    }}
                                >
                                    Открыть веб-версию
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    pb: { xs: '40px', md: 'clamp(48px, 6vw, 72px)' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '18px 28px',
                        pt: '22px',
                        borderTop: '1px solid',
                        borderColor: p.line,
                    }}
                >
                    <Box sx={{ width: { xs: '150px', md: '176px' }, color: p.ink, lineHeight: 0 }}>
                        <AquariumLogo style={{ display: 'block', width: '100%', height: 'auto' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px' }}>
                        <Box
                            component={Link}
                            to="/projects/aquarium"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                color: p.teal,
                                fontFamily: inter,
                                fontSize: '11px',
                                fontWeight: 600,
                                textDecoration: 'none',
                            }}
                        >
                            О мессенджере
                            <ArrowUpRight size={13} aria-hidden="true" />
                        </Box>
                        <Box
                            component="a"
                            href="https://aquarium.org.ru"
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                color: p.teal,
                                fontFamily: inter,
                                fontSize: '11px',
                                fontWeight: 600,
                                textDecoration: 'none',
                            }}
                        >
                            Веб-версия
                            <ArrowUpRight size={13} aria-hidden="true" />
                        </Box>
                        <Box
                            component="a"
                            href="https://aquarium.org.ru/apps"
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                color: p.teal,
                                fontFamily: inter,
                                fontSize: '11px',
                                fontWeight: 600,
                                textDecoration: 'none',
                            }}
                        >
                            Приложения
                            <ArrowUpRight size={13} aria-hidden="true" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
