import Box from '@mui/joy/Box'
import { useColorScheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import {
    AppleLogo,
    ArrowRight,
    ArrowUpRight,
    BatteryFull,
    Bell,
    CaretLeft,
    CellSignalFull,
    Check,
    DeviceMobile,
    GooglePlayLogo,
    Heart,
    Image as ImageIcon,
    Paperclip,
    PaperPlaneTilt,
    PhoneCall,
    PlugsConnected,
    Smiley,
    Star,
    VideoCamera,
    WifiHigh,
} from '@phosphor-icons/react'
import AquariumLogo from '../../components/aquarium-logo'
import AquariumMark from '../../components/aquarium-mark'

const getPalette = (dark) => dark
    ? {
        page: '#071a19',
        ink: '#eafaf8',
        muted: 'rgba(234, 250, 248, .66)',
        faint: 'rgba(234, 250, 248, .42)',
        line: 'rgba(234, 250, 248, .13)',
        card: '#0b2422',
        mint: '#10302d',
        teal: '#45d9d2',
        tealFill: '#14c4be',
        featureBg: '#081f1d',
        heroBg: '#071a19',
        heroGlow: 'radial-gradient(900px 600px at 78% 12%, rgba(15, 186, 181, .22), transparent 64%)',
    }
    : {
        page: '#f3fbfa',
        ink: '#072b29',
        muted: 'rgba(7, 43, 41, .64)',
        faint: 'rgba(7, 43, 41, .43)',
        line: 'rgba(7, 43, 41, .12)',
        card: '#ffffff',
        mint: '#def6f3',
        teal: '#087b76',
        tealFill: '#0fbab5',
        featureBg: '#ecfaf8',
        heroBg: '#eaf9f7',
        heroGlow: 'radial-gradient(900px 600px at 80% 14%, rgba(15, 186, 181, .28), transparent 64%), radial-gradient(600px 420px at 8% 94%, rgba(15, 186, 181, .14), transparent 62%)',
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
    fontSize: '13px',
    fontWeight: 600,
    lineHeight: 1,
    textDecoration: 'none',
    transition: 'transform .3s cubic-bezier(.22,1,.36,1), background-color .25s ease, color .25s ease, border-color .25s ease',
    '&:hover': { transform: 'translateY(-2px)' },
}

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
        text: 'Начните в браузере, продолжите на телефоне — чаты и лента всегда рядом.',
    },
    {
        icon: PhoneCall,
        title: 'Звонки',
        text: 'Аудио- и видеозвонки прямо из чата, без переключения между приложениями.',
    },
    {
        icon: ImageIcon,
        title: 'Медиа',
        text: 'Фотографии, файлы и стикеры в одном разговоре — ничего не теряется.',
    },
    {
        icon: Bell,
        title: 'Уведомления',
        text: 'Пуши о новых сообщениях и звонках, чтобы не держать приложение открытым.',
    },
]

function PhoneFrame({ children, dark }) {
    return (
        <Box
            sx={{
                position: 'relative',
                width: { xs: 'min(268px, 80vw)', md: 'clamp(286px, 24vw, 336px)' },
                aspectRatio: '9 / 19.2',
                p: { xs: '7px', md: '9px' },
                borderRadius: { xs: '42px', md: '52px' },
                bgcolor: '#08110f',
                boxShadow: dark
                    ? '0 50px 120px rgba(0, 0, 0, .5), inset 0 0 0 1px rgba(255,255,255,.16)'
                    : '0 50px 110px rgba(4, 58, 55, .26), inset 0 0 0 1px rgba(255,255,255,.2)',
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    height: '100%',
                    overflow: 'hidden',
                    borderRadius: { xs: '36px', md: '45px' },
                    bgcolor: '#f2faf9',
                }}
            >
                {children}
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        top: '9px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '32%',
                        height: '21px',
                        borderRadius: '999px',
                        bgcolor: '#08110f',
                        zIndex: 6,
                    }}
                />
            </Box>
        </Box>
    )
}

function ChatScreen() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: '16px',
                    pt: '11px',
                    pb: '5px',
                    color: '#072b29',
                    fontFamily: inter,
                    fontSize: '9px',
                    fontWeight: 600,
                }}
            >
                <Box component="span">9:41</Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '3px', pr: '2px' }}>
                    <CellSignalFull size={9} weight="fill" />
                    <WifiHigh size={9} weight="bold" />
                    <BatteryFull size={11} weight="fill" />
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '7px',
                    px: '10px',
                    py: '8px',
                    borderBottom: '1px solid rgba(7,43,41,.08)',
                    bgcolor: 'rgba(255,255,255,.82)',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <CaretLeft size={13} weight="bold" color="#087b76" aria-hidden="true" />
                <Box
                    component="img"
                    src="/img/aquarium/user-sasha.jpg"
                    alt=""
                    sx={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Box
                        sx={{
                            fontFamily: inter,
                            fontSize: '9.5px',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            color: '#072b29',
                        }}
                    >
                        Александра
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '3px',
                            mt: '1px',
                            fontFamily: inter,
                            fontSize: '7.5px',
                            lineHeight: 1.2,
                            color: 'rgba(7,43,41,.46)',
                        }}
                    >
                        <Box
                            aria-hidden="true"
                            sx={{ width: '4px', height: '4px', borderRadius: '50%', bgcolor: '#0fbab5' }}
                        />
                        в сети
                    </Box>
                </Box>
                <PhoneCall size={13} color="#087b76" aria-hidden="true" />
                <VideoCamera size={14} color="#087b76" aria-hidden="true" />
            </Box>

            <Box
                sx={{
                    flex: 1,
                    minHeight: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    gap: '5px',
                    px: '9px',
                    py: '9px',
                    background: 'linear-gradient(180deg, #eaf8f6 0%, #f4fbfa 100%)',
                }}
            >
                <Box
                    sx={{
                        alignSelf: 'center',
                        px: '7px',
                        py: '3px',
                        borderRadius: '999px',
                        bgcolor: 'rgba(7,43,41,.06)',
                        fontFamily: inter,
                        fontSize: '6.5px',
                        fontWeight: 500,
                        color: 'rgba(7,43,41,.5)',
                    }}
                >
                    Сегодня
                </Box>

                {[
                    {
                        type: 'in',
                        text: 'Смотри, какие виды с прогулки',
                        time: '11:38',
                        image: '/img/aquarium/post-sasha-1.jpg',
                    },
                    {
                        type: 'out',
                        text: 'Красота! А стикеры уже новые?',
                        time: '11:39',
                    },
                    {
                        type: 'in',
                        text: 'Да, вчера добавили целый набор',
                        time: '11:40',
                    },
                    {
                        type: 'in',
                        text: 'Привет! Ты уже видела мессенджер Аквариум?',
                        time: '11:41',
                    },
                    {
                        type: 'out',
                        text: 'Да, вчера скачала. Выглядит прикольно',
                        time: '11:42',
                    },
                    {
                        type: 'in',
                        text: 'Вот-вот! И звонки прямо из чата работают',
                        time: '11:43',
                    },
                ].map((message, index) => (
                    <Box
                        key={index}
                        sx={{
                            alignSelf: message.type === 'out' ? 'flex-end' : 'flex-start',
                            maxWidth: '84%',
                        }}
                    >
                        <Box
                            sx={{
                                px: '9px',
                                py: '6px',
                                borderRadius: message.type === 'out'
                                    ? '11px 11px 3px 11px'
                                    : '3px 11px 11px 11px',
                                bgcolor: message.type === 'out' ? '#0fbab5' : '#ffffff',
                                color: message.type === 'out' ? '#032422' : '#072b29',
                                fontFamily: inter,
                                fontSize: '9px',
                                lineHeight: 1.4,
                                boxShadow: message.type === 'out'
                                    ? 'none'
                                    : '0 2px 8px rgba(7,43,41,.04)',
                            }}
                        >
                            {message.image ? (
                                <Box
                                    component="img"
                                    src={message.image}
                                    alt=""
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        height: '80px',
                                        mb: '5px',
                                        borderRadius: '7px',
                                        objectFit: 'cover',
                                    }}
                                />
                            ) : null}
                            {message.text}
                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: message.type === 'out' ? 'flex-end' : 'flex-start',
                                gap: '2px',
                                mt: '2px',
                                px: '3px',
                                fontFamily: inter,
                                fontSize: '6.5px',
                                color: 'rgba(7,43,41,.42)',
                            }}
                        >
                            {message.time}
                            {message.type === 'out' ? <Check size={7} weight="bold" color="#0a8f8b" /> : null}
                        </Box>
                    </Box>
                ))}

                <Box sx={{ alignSelf: 'flex-end', maxWidth: '84%' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            px: '8px',
                            py: '7px',
                            borderRadius: '11px 11px 3px 11px',
                            bgcolor: '#ffffff',
                            border: '1px solid rgba(7,43,41,.07)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'grid',
                                placeItems: 'center',
                                width: '22px',
                                height: '22px',
                                borderRadius: '6px',
                                bgcolor: '#def6f3',
                                color: '#087b76',
                                flexShrink: 0,
                            }}
                        >
                            <Paperclip size={10} />
                        </Box>
                        <Box>
                            <Box
                                sx={{
                                    fontFamily: inter,
                                    fontSize: '8px',
                                    fontWeight: 600,
                                    color: '#072b29',
                                    lineHeight: 1.2,
                                }}
                            >
                                Aquarium.pdf
                            </Box>
                            <Box
                                sx={{
                                    fontFamily: inter,
                                    fontSize: '6.5px',
                                    color: 'rgba(7,43,41,.42)',
                                    lineHeight: 1.2,
                                    mt: '1px',
                                }}
                            >
                                3,6 МБ
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ alignSelf: 'flex-end', maxWidth: '84%' }}>
                    <Box
                        sx={{
                            px: '9px',
                            py: '6px',
                            borderRadius: '11px 11px 3px 11px',
                            bgcolor: '#0fbab5',
                            color: '#032422',
                            fontFamily: inter,
                            fontSize: '9px',
                            lineHeight: 1.4,
                        }}
                    >
                        Давай созвонимся вечером, покажу новые стикеры
                    </Box>
                </Box>

                <Box sx={{ alignSelf: 'flex-start', maxWidth: '84%' }}>
                    <Box
                        sx={{
                            px: '9px',
                            py: '6px',
                            borderRadius: '3px 11px 11px 11px',
                            bgcolor: '#ffffff',
                            color: '#072b29',
                            fontFamily: inter,
                            fontSize: '9px',
                            lineHeight: 1.4,
                        }}
                    >
                        Договорились! 🙌
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    px: '9px',
                    py: '8px',
                    borderTop: '1px solid rgba(7,43,41,.07)',
                    bgcolor: '#ffffff',
                }}
            >
                <Paperclip size={13} color="#087b76" aria-hidden="true" />
                <Box
                    sx={{
                        flex: 1,
                        px: '9px',
                        py: '6px',
                        borderRadius: '999px',
                        bgcolor: '#f0f8f7',
                        fontFamily: inter,
                        fontSize: '8px',
                        color: 'rgba(7,43,41,.4)',
                    }}
                >
                    Сообщение
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        placeItems: 'center',
                        width: '25px',
                        height: '25px',
                        borderRadius: '50%',
                        bgcolor: '#0fbab5',
                        color: '#ffffff',
                    }}
                >
                    <PaperPlaneTilt size={12} weight="fill" />
                </Box>
            </Box>
        </Box>
    )
}

function FeedTeaser({ p }) {
    return (
        <Box
            aria-hidden="true"
            sx={{
                display: { xs: 'none', lg: 'block' },
                position: 'absolute',
                left: '-76px',
                top: '74px',
                width: '196px',
                p: '10px',
                borderRadius: '20px',
                bgcolor: p.card,
                border: '1px solid',
                borderColor: p.line,
                boxShadow: '0 30px 70px rgba(4, 58, 55, .16)',
                transform: 'rotate(-5deg)',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <Box
                    component="img"
                    src="/img/aquarium/user-maxim.jpg"
                    alt=""
                    sx={{ width: '24px', height: '24px', borderRadius: '50%', objectFit: 'cover' }}
                />
                <Box>
                    <Box
                        sx={{
                            fontFamily: inter,
                            fontSize: '8.5px',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            color: p.ink,
                        }}
                    >
                        Максим Ефимцев
                    </Box>
                    <Box
                        sx={{
                            fontFamily: inter,
                            fontSize: '7px',
                            lineHeight: 1.2,
                            color: p.faint,
                            mt: '1px',
                        }}
                    >
                        4 дня назад
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    mt: '7px',
                    fontFamily: inter,
                    fontSize: '8.5px',
                    lineHeight: 1.35,
                    color: p.ink,
                }}
            >
                Август балует видами
            </Box>
            <Box
                component="img"
                src="/img/aquarium/post-maxim-1.jpg"
                alt=""
                sx={{
                    display: 'block',
                    width: '100%',
                    height: '84px',
                    mt: '6px',
                    borderRadius: '8px',
                    objectFit: 'cover',
                }}
            />
            <Box sx={{ display: 'flex', gap: '12px', mt: '7px', color: p.faint }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '7.5px' }}>
                    <Heart size={9} />
                    4
                </Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '3px', fontSize: '7.5px' }}>
                    <Smiley size={9} />
                    1
                </Box>
            </Box>
        </Box>
    )
}

export default function AquariumAppProjectPage() {
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const p = getPalette(dark)

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
                    overflow: 'hidden',
                    bgcolor: p.heroBg,
                    backgroundImage: p.heroGlow,
                    pt: { xs: 'clamp(104px, 15vw, 138px)', md: 'clamp(128px, 13vw, 176px)' },
                    pb: { xs: 'clamp(54px, 9vw, 76px)', md: 'clamp(76px, 9vw, 120px)' },
                    borderBottom: '1px solid',
                    borderColor: p.line,
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        right: '-10%',
                        top: '18%',
                        width: 'min(620px, 62vw)',
                        color: p.tealFill,
                        opacity: 0.055,
                    }}
                >
                    <AquariumMark style={{ width: '100%', height: 'auto' }} />
                </Box>

                <Box
                    sx={{
                        position: 'relative',
                        maxWidth: '1500px',
                        mx: 'auto',
                        px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.02fr) minmax(0, .98fr)' },
                        gap: { xs: 'clamp(40px, 8vw, 58px)', lg: 'clamp(30px, 4vw, 70px)' },
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '9px',
                                color: p.teal,
                                ...kickerSx,
                                fontSize: '9.5px',
                            }}
                        >
                            <Box
                                aria-hidden="true"
                                sx={{ width: '6px', height: '6px', borderRadius: '50%', bgcolor: p.tealFill }}
                            />
                            Приложение · iOS и Android
                        </Box>

                        <Box
                            component="h1"
                            id="aquarium-app-title"
                            sx={{
                                m: 0,
                                mt: '20px',
                                maxWidth: '12ch',
                                fontFamily: inter,
                                fontSize: 'clamp(2.8rem, 6.4vw, 6.2rem)',
                                fontWeight: 700,
                                lineHeight: 0.92,
                                letterSpacing: '-0.06em',
                                color: p.ink,
                                textWrap: 'balance',
                            }}
                        >
                            Аквариум всегда под рукой
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: '22px',
                                maxWidth: '46ch',
                                fontFamily: inter,
                                fontSize: 'clamp(15px, 1.3vw, 17px)',
                                lineHeight: 1.65,
                                color: p.muted,
                            }}
                        >
                            Мессенджер, микроблог и звонки в приложении для iOS и Android.
                            Задача появилась — реализовал её за 6 месяцев разработки:
                            от первых экранов до релиза в маркетах.
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mt: '28px' }}>
                            <Box
                                component="a"
                                href="https://aquarium.org.ru/apps"
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    ...buttonBase,
                                    bgcolor: p.tealFill,
                                    color: '#032422',
                                    '&:hover': { bgcolor: dark ? '#3ad6cf' : '#2ed0ca' },
                                }}
                            >
                                Открыть в маркетах
                                <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
                            </Box>
                            <Box
                                component={Link}
                                to="/projects/aquarium"
                                sx={{
                                    ...buttonBase,
                                    border: '1px solid',
                                    borderColor: p.line,
                                    color: p.ink,
                                    bgcolor: dark ? 'rgba(255,255,255,.03)' : 'rgba(255,255,255,.5)',
                                    '&:hover': { borderColor: p.teal, bgcolor: p.card },
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
                                alignItems: 'center',
                                gap: '8px',
                                mt: '30px',
                                pt: '18px',
                                borderTop: '1px solid',
                                borderColor: p.line,
                            }}
                        >
                            {['iOS 15.1+', 'Android', '6 месяцев'].map((label) => (
                                <Box
                                    component="span"
                                    key={label}
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        px: '10px',
                                        py: '7px',
                                        borderRadius: '999px',
                                        border: '1px solid',
                                        borderColor: p.line,
                                        bgcolor: dark ? 'rgba(255,255,255,.03)' : 'rgba(255,255,255,.55)',
                                        color: p.muted,
                                        fontFamily: inter,
                                        fontSize: '10px',
                                        fontWeight: 600,
                                        lineHeight: 1,
                                    }}
                                >
                                    <Star size={10} weight="fill" color={p.tealFill} aria-hidden="true" />
                                    {label}
                                </Box>
                            ))}
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: { xs: '560px', md: '660px' },
                        }}
                    >
                        <Box
                            aria-hidden="true"
                            sx={{
                                position: 'absolute',
                                width: { xs: '280px', md: '420px' },
                                height: { xs: '280px', md: '420px' },
                                borderRadius: '50%',
                                bgcolor: p.tealFill,
                                opacity: 0.11,
                                filter: 'blur(70px)',
                            }}
                        />
                        <FeedTeaser p={p} />

                        <Box sx={{ position: 'relative', zIndex: 2 }}>
                            <PhoneFrame dark={dark}>
                                <ChatScreen />
                            </PhoneFrame>
                        </Box>

                        <Box
                            aria-hidden="true"
                            sx={{
                                position: 'absolute',
                                right: { xs: '6%', md: '8%', lg: '2%' },
                                bottom: { xs: '4%', md: '7%' },
                                display: 'grid',
                                placeItems: 'center',
                                width: { xs: '60px', md: '76px' },
                                height: { xs: '60px', md: '76px' },
                                borderRadius: { xs: '17px', md: '21px' },
                                bgcolor: p.tealFill,
                                color: '#ffffff',
                                boxShadow: '0 22px 50px rgba(4, 58, 55, .24)',
                                transform: 'rotate(8deg)',
                            }}
                        >
                            <AquariumMark style={{ width: '62%', height: 'auto' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-app-story"
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    py: { xs: 'clamp(64px, 10vw, 88px)', md: 'clamp(90px, 11vw, 150px)' },
                }}
            >
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
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                gap: '12px',
                                mt: '10px',
                            }}
                        >
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
                                        color: p.ink,
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
                            sx={{
                                m: 0,
                                maxWidth: '18ch',
                                fontFamily: inter,
                                fontSize: 'clamp(2rem, 4.2vw, 4rem)',
                                fontWeight: 600,
                                lineHeight: 1,
                                letterSpacing: '-0.05em',
                                color: p.ink,
                                textWrap: 'balance',
                            }}
                        >
                            Появилась задача — сделать приложение
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: '22px',
                                maxWidth: '54ch',
                                fontFamily: inter,
                                fontSize: 'clamp(14.5px, 1.2vw, 16px)',
                                lineHeight: 1.7,
                                color: p.muted,
                            }}
                        >
                            Нужно было сохранить знакомый интерфейс и добавить то,
                            чего не даёт браузер: быстрый отклик, уведомления и
                            звонки в один тап. Реализовал за 6 месяцев разработки —
                            от проектирования экранов до публикации в маркетах.
                        </Box>

                        <Box
                            sx={{
                                mt: 'clamp(30px, 5vw, 54px)',
                                pt: '20px',
                                borderTop: '1px solid',
                                borderColor: p.line,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: '12px',
                                    mb: '12px',
                                    ...kickerSx,
                                    fontSize: '9px',
                                    color: p.faint,
                                }}
                            >
                                <Box component="span">Хронология</Box>
                                <Box component="span">6 / 6</Box>
                            </Box>

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(6, minmax(0, 1fr))',
                                    gap: '5px',
                                }}
                            >
                                {[1, 2, 3, 4, 5, 6].map((month) => (
                                    <Box key={month}>
                                        <Box
                                            sx={{
                                                height: '4px',
                                                borderRadius: '999px',
                                                bgcolor: p.tealFill,
                                                opacity: 1 - (6 - month) * 0.06,
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                mt: '7px',
                                                fontFamily: inter,
                                                fontSize: '9px',
                                                fontWeight: 500,
                                                color: p.faint,
                                            }}
                                        >
                                            0{month}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            <Box
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
                                    gap: '1px',
                                    mt: '18px',
                                    bgcolor: p.line,
                                    border: '1px solid',
                                    borderColor: p.line,
                                    borderRadius: '18px',
                                    overflow: 'hidden',
                                }}
                            >
                                {milestones.map((item, index) => (
                                    <Box
                                        key={item.title}
                                        sx={{
                                            p: { xs: '18px', md: '22px' },
                                            bgcolor: p.card,
                                            transition: 'background-color .25s ease',
                                            '&:hover': { bgcolor: p.mint },
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
                                            sx={{
                                                mt: '12px',
                                                fontFamily: inter,
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                lineHeight: 1.2,
                                                letterSpacing: '-0.02em',
                                                color: p.ink,
                                            }}
                                        >
                                            {item.title}
                                        </Box>
                                        <Box
                                            sx={{
                                                mt: '6px',
                                                fontFamily: inter,
                                                fontSize: '12px',
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
                aria-labelledby="aquarium-app-inside"
                sx={{
                    bgcolor: p.featureBg,
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    py: { xs: 'clamp(58px, 9vw, 80px)', md: 'clamp(80px, 9vw, 130px)' },
                }}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'flex-end',
                            justifyContent: 'space-between',
                            gap: '16px 40px',
                            mb: { xs: '26px', md: '40px' },
                        }}
                    >
                        <Box>
                            <Box sx={{ ...kickerSx, color: p.teal }}>Что внутри</Box>
                            <Box
                                component="h2"
                                id="aquarium-app-inside"
                                sx={{
                                    m: 0,
                                    mt: '12px',
                                    maxWidth: '16ch',
                                    fontFamily: inter,
                                    fontSize: 'clamp(2rem, 4.4vw, 4rem)',
                                    fontWeight: 600,
                                    lineHeight: 0.98,
                                    letterSpacing: '-0.05em',
                                    color: p.ink,
                                    textWrap: 'balance',
                                }}
                            >
                                Всё, что нужно в дороге
                            </Box>
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                maxWidth: '36ch',
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
                                xs: '1fr',
                                sm: 'repeat(2, minmax(0, 1fr))',
                                lg: 'repeat(4, minmax(0, 1fr))',
                            },
                            gap: '12px',
                        }}
                    >
                        {appFeatures.map((item) => {
                            const Icon = item.icon
                            return (
                                <Box
                                    key={item.title}
                                    sx={{
                                        p: { xs: '20px', md: '24px' },
                                        borderRadius: '20px',
                                        border: '1px solid',
                                        borderColor: p.line,
                                        bgcolor: p.card,
                                        transition: 'transform .35s cubic-bezier(.22,1,.36,1), border-color .3s ease',
                                        '&:hover': { transform: 'translateY(-4px)', borderColor: p.teal },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'grid',
                                            placeItems: 'center',
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '11px',
                                            bgcolor: p.mint,
                                            color: p.teal,
                                        }}
                                    >
                                        <Icon size={18} aria-hidden="true" />
                                    </Box>
                                    <Box
                                        component="h3"
                                        sx={{
                                            m: 0,
                                            mt: '18px',
                                            fontFamily: inter,
                                            fontSize: '17px',
                                            fontWeight: 600,
                                            lineHeight: 1.2,
                                            letterSpacing: '-0.025em',
                                            color: p.ink,
                                        }}
                                    >
                                        {item.title}
                                    </Box>
                                    <Box
                                        component="p"
                                        sx={{
                                            m: 0,
                                            mt: '7px',
                                            fontFamily: inter,
                                            fontSize: '12.5px',
                                            lineHeight: 1.55,
                                            color: p.muted,
                                        }}
                                    >
                                        {item.text}
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-app-download"
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    py: { xs: 'clamp(54px, 9vw, 76px)', md: 'clamp(80px, 10vw, 130px)' },
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.08fr) minmax(0, .92fr)' },
                        gap: '12px',
                        alignItems: 'stretch',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            overflow: 'hidden',
                            borderRadius: { xs: '22px', md: '28px' },
                            bgcolor: '#04211f',
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                aspectRatio: '16 / 9',
                                flexShrink: 0,
                                bgcolor: '#0fbab5',
                            }}
                        >
                            <Box
                                component="img"
                                src="/img/projects/aquarium-app@light.jpg"
                                alt="Промо-материал приложения Аквариум: чат и лента на смартфонах"
                                loading="lazy"
                                decoding="async"
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'block',
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '16px',
                                px: { xs: '18px', md: '22px' },
                                py: '14px',
                                color: '#eafaf8',
                            }}
                        >
                            <Box>
                                <Box sx={{ ...kickerSx, fontSize: '8px', color: 'rgba(234,250,248,.45)' }}>
                                    Промо-материал
                                </Box>
                                <Box
                                    sx={{
                                        mt: '4px',
                                        fontFamily: inter,
                                        fontSize: '13px',
                                        fontWeight: 600,
                                        lineHeight: 1.3,
                                    }}
                                >
                                    Чат и лента на iOS и Android
                                </Box>
                            </Box>
                            <Box
                                sx={{
                                    display: 'grid',
                                    placeItems: 'center',
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '11px',
                                    bgcolor: '#0fbab5',
                                    color: '#ffffff',
                                    flexShrink: 0,
                                }}
                            >
                                <AquariumMark style={{ width: '62%', height: 'auto' }} />
                            </Box>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            p: { xs: '24px', md: 'clamp(28px, 3.4vw, 46px)' },
                            borderRadius: { xs: '22px', md: '28px' },
                            bgcolor: '#04211f',
                            color: '#eafaf8',
                            backgroundImage:
                                'radial-gradient(560px 360px at 100% 0%, rgba(15, 186, 181, .28), transparent 64%)',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'grid',
                                placeItems: 'center',
                                width: '54px',
                                height: '54px',
                                borderRadius: '15px',
                                bgcolor: '#0fbab5',
                                color: '#ffffff',
                            }}
                        >
                            <AquariumMark style={{ width: '62%', height: 'auto' }} />
                        </Box>

                        <Box sx={{ ...kickerSx, fontSize: '9px', color: 'rgba(234,250,248,.5)', mt: '22px' }}>
                            В маркетах
                        </Box>
                        <Box
                            component="h2"
                            id="aquarium-app-download"
                            sx={{
                                m: 0,
                                mt: '10px',
                                maxWidth: '14ch',
                                fontFamily: inter,
                                fontSize: 'clamp(1.7rem, 2.8vw, 2.6rem)',
                                fontWeight: 600,
                                lineHeight: 1.02,
                                letterSpacing: '-0.045em',
                                color: '#f4fefd',
                                textWrap: 'balance',
                            }}
                        >
                            Приложение для iOS и Android в маркетах
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: '12px',
                                maxWidth: '34ch',
                                fontFamily: inter,
                                fontSize: '12.5px',
                                lineHeight: 1.6,
                                color: 'rgba(234, 250, 248, .62)',
                            }}
                        >
                            Скачайте приложение и продолжите разговор там, где
                            остановились. Веб-версия и телефон синхронизируются.
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mt: 'auto', pt: '26px' }}>
                            {[
                                { icon: AppleLogo, label: 'App Store', meta: 'iOS 15.1+' },
                                { icon: GooglePlayLogo, label: 'Google Play', meta: 'Android' },
                            ].map((store) => {
                                const Icon = store.icon
                                return (
                                    <Box
                                        component="a"
                                        key={store.label}
                                        href="https://aquarium.org.ru/apps"
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '11px',
                                            px: '13px',
                                            py: '11px',
                                            borderRadius: '12px',
                                            border: '1px solid rgba(234,250,248,.16)',
                                            bgcolor: 'rgba(255,255,255,.04)',
                                            color: '#eafaf8',
                                            textDecoration: 'none',
                                            transition: 'background-color .2s ease, border-color .2s ease',
                                            '&:hover': {
                                                bgcolor: 'rgba(255,255,255,.08)',
                                                borderColor: 'rgba(234,250,248,.34)',
                                            },
                                        }}
                                    >
                                        <Icon size={19} aria-hidden="true" />
                                        <Box sx={{ flex: 1 }}>
                                            <Box
                                                sx={{
                                                    fontFamily: inter,
                                                    fontSize: '12px',
                                                    fontWeight: 600,
                                                    lineHeight: 1.2,
                                                }}
                                            >
                                                {store.label}
                                            </Box>
                                            <Box
                                                sx={{
                                                    fontFamily: inter,
                                                    fontSize: '9px',
                                                    lineHeight: 1.2,
                                                    color: 'rgba(234,250,248,.46)',
                                                    mt: '2px',
                                                }}
                                            >
                                                {store.meta}
                                            </Box>
                                        </Box>
                                        <ArrowUpRight size={15} aria-hidden="true" />
                                    </Box>
                                )
                            })}
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '7px',
                                mt: '16px',
                                fontFamily: inter,
                                fontSize: '9px',
                                color: 'rgba(234, 250, 248, .44)',
                            }}
                        >
                            <DeviceMobile size={12} aria-hidden="true" />
                            Все ссылки — на странице приложений Аквариума
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    pb: { xs: '44px', md: 'clamp(52px, 6vw, 80px)' },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '22px 40px',
                        pt: '22px',
                        borderTop: '1px solid',
                        borderColor: p.line,
                    }}
                >
                    <Box sx={{ width: { xs: '150px', md: '176px' }, color: p.ink, lineHeight: 0 }}>
                        <AquariumLogo style={{ display: 'block', width: '100%', height: 'auto' }} />
                    </Box>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '14px 26px' }}>
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
                            <ArrowRight size={13} aria-hidden="true" />
                            О мессенджере
                        </Box>
                        <Box
                            component={Link}
                            to="/projects"
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '7px',
                                color: p.muted,
                                fontFamily: inter,
                                fontSize: '11px',
                                fontWeight: 500,
                                textDecoration: 'none',
                            }}
                        >
                            Все проекты
                            <ArrowRight size={13} aria-hidden="true" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
