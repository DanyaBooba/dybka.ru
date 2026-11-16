import { useState } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ArrowUpRight,
    Article,
    ChatCircle,
    ChatCircleDots,
    Check,
    DeviceMobile,
    Devices,
    FishSimple,
    GlobeHemisphereWest,
    Heart,
    Laptop,
    Microphone,
    Paperclip,
    PhoneCall,
    PhoneDisconnect,
    ShieldCheck,
    Shuffle,
    Smiley,
    Sticker,
    VideoCamera,
} from '@phosphor-icons/react'
import AquariumLogo from '../../components/aquarium-logo'
import AquariumMark from '../../components/aquarium-mark'
import CaseBrowser from '../../components/case-browser'
import { Post } from '../../components/aquarium-post'
import posts from '../../data/aquarium-posts'

const getPalette = (dark) => dark
    ? {
        page: '#121212',
        ink: '#eafaf8',
        muted: 'rgba(234, 250, 248, .66)',
        faint: 'rgba(234, 250, 248, .42)',
        line: 'rgba(234, 250, 248, .13)',
        card: '#0b2422',
        cardHover: '#0e2c29',
        mint: '#10302d',
        teal: '#45d9d2',
        tealDeep: '#7ce8e2',
        tealFill: '#14c4be',
        featureBg: '#121212',
    }
    : {
        page: '#f8fafc',
        ink: '#072b29',
        muted: 'rgba(7, 43, 41, .64)',
        faint: 'rgba(7, 43, 41, .43)',
        line: 'rgba(7, 43, 41, .12)',
        card: '#ffffff',
        cardHover: '#f7fefd',
        mint: '#def6f3',
        teal: '#087b76',
        tealDeep: '#065b57',
        tealFill: '#0fbab5',
        featureBg: '#f8fafc',
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

const heroPostPalette = {
    postBackground: '#ffffff',
    text: '#000000',
    postMutedText: 'rgba(0, 0, 0, .45)',
    verifiedColor: '#1d807d',
}

const heroPhoneWidth = 'clamp(160px, 15vw, 220px)'

function pickRandomPost(currentName) {
    const pool = currentName
        ? posts.filter((post) => post.name !== currentName)
        : posts
    return pool[Math.floor(Math.random() * pool.length)]
}

function HeroVisual({ heroPost, dark }) {
    const browserImageSx = {
        position: 'absolute',
        inset: 0,
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'top center',
        transition: 'opacity .45s ease',
    }

    return (
        <Box sx={{ position: 'relative', minWidth: 0 }}>
            <Box
                aria-hidden="true"
                sx={{
                    position: 'absolute',
                    inset: '6% 4% 4%',
                    borderRadius: '50%',
                    bgcolor: '#0fbab5',
                    opacity: 0.15,
                    filter: 'blur(90px)',
                    pointerEvents: 'none',
                }}
            />

            <Box
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    // pr: { xs: 0, sm: `calc(${heroPhoneWidth} - 28px)` }
                }}
            >
                <CaseBrowser
                    url="aquarium.org.ru"
                    title="Аквариум – мессенджер и микроблог"
                    dark
                    viewportSx={{ aspectRatio: { xs: '16 / 11', md: '16 / 10' } }}
                >
                    <Box
                        component="img"
                        src="/img/pages/aquarium/aquarium@light.jpg"
                        alt={dark ? '' : 'Лента Аквариума в светлой теме: записи, фотографии, лайки и комментарии'}
                        aria-hidden={dark ? 'true' : undefined}
                        loading="eager"
                        decoding="async"
                        sx={{
                            ...browserImageSx,
                            opacity: dark ? 0 : 1,
                        }}
                    />
                    <Box
                        component="img"
                        src="/img/pages/aquarium/aquarium@dark.jpg"
                        alt={dark ? 'Лента Аквариума в тёмной теме: записи, фотографии, лайки и комментарии' : ''}
                        aria-hidden={dark ? undefined : 'true'}
                        loading="eager"
                        decoding="async"
                        sx={{
                            ...browserImageSx,
                            opacity: dark ? 1 : 0,
                        }}
                    />
                </CaseBrowser>
            </Box>

            <Box
                sx={{
                    position: 'absolute',
                    right: { xs: '-4px', sm: 0 },
                    top: '50%',
                    bottom: 0,
                    zIndex: 3,
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                    width: heroPhoneWidth,
                    transform: 'translateY(-50%) translateX(30px)',
                    pointerEvents: 'none',
                }}
            >
                <Box
                    className="aquarium-hero-phone"
                    sx={{
                        width: '100%',
                        filter: 'drop-shadow(0 16px 16px rgba(0, 0, 0, .3))',
                        transform: 'rotate(2.4deg)',
                    }}
                >
                    <Box
                        component="img"
                        src="/img/pages/aquarium/iphone.png"
                        alt="Переписка в приложении «Аквариум» на iPhone"
                        width={960}
                        height={1981}
                        loading="eager"
                        fetchPriority="high"
                        decoding="async"
                        sx={{ display: 'block', width: '100%', height: 'auto' }}
                    />
                </Box>
            </Box>

            <Box
                className="aquarium-hero-post"
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
                    position: { xs: 'relative', sm: 'absolute' },
                    left: { xs: 'auto', sm: '-16px', lg: '-64px' },
                    bottom: { xs: 'auto', sm: '-40px', lg: '-64px' },
                    zIndex: 4,
                    width: { xs: 'min(280px, 80%)', md: 'clamp(250px, 21vw, 310px)' },
                    mt: { xs: '-26px', sm: 0 },
                    ml: { xs: '-8px', sm: 0 },
                    transform: 'rotate(-2.4deg) scale(.75)',
                    filter: 'drop-shadow(0 16px 16px rgba(0, 0, 0, .3))',
                }}
            >
                <Post post={heroPost} palette={heroPostPalette} />
            </Box>
        </Box>
    )
}

function FeatureCard({ p, icon: Icon, title, text, children, sx }) {
    return (
        <Box
            sx={[
                {
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    p: { xs: '22px', md: 'clamp(24px, 2.4vw, 32px)' },
                    borderRadius: { xs: '22px', md: '26px' },
                    border: '1px solid',
                    borderColor: p.line,
                    bgcolor: p.card,
                    transition: 'transform .35s cubic-bezier(.22,1,.36,1), border-color .3s ease, background-color .3s ease',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        borderColor: p.teal,
                        bgcolor: p.cardHover,
                    },
                },
                ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
            ]}
        >
            <Box
                sx={{
                    display: 'grid',
                    placeItems: 'center',
                    width: '38px',
                    height: '38px',
                    borderRadius: '12px',
                    bgcolor: p.mint,
                    color: p.teal,
                }}
            >
                <Icon size={19} weight="regular" aria-hidden="true" />
            </Box>
            <Box
                component="h3"
                sx={{
                    m: 0,
                    mt: '18px',
                    fontFamily: inter,
                    fontSize: 'clamp(18px, 1.6vw, 21px)',
                    fontWeight: 600,
                    lineHeight: 1.15,
                    letterSpacing: '-0.025em',
                    color: p.ink,
                }}
            >
                {title}
            </Box>
            <Box
                component="p"
                sx={{
                    m: 0,
                    mt: '8px',
                    maxWidth: '36ch',
                    fontFamily: inter,
                    fontSize: '13.5px',
                    lineHeight: 1.55,
                    color: p.muted,
                }}
            >
                {text}
            </Box>
            {children}
        </Box>
    )
}

function ChatMock({ p }) {
    return (
        <Box sx={{ mt: 'auto', pt: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Box
                sx={{
                    alignSelf: 'flex-end',
                    maxWidth: '86%',
                    px: '13px',
                    py: '10px',
                    borderRadius: '16px 16px 4px 16px',
                    bgcolor: p.tealFill,
                    color: '#032422',
                    fontFamily: inter,
                    fontSize: '12.5px',
                    fontWeight: 500,
                    lineHeight: 1.4,
                }}
            >
                Привет! Собрал для чата новые стикеры.
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '8px', maxWidth: '88%' }}>
                <Box
                    component="img"
                    src="/img/aquarium/user-sasha.jpg"
                    alt=""
                    sx={{ width: '26px', height: '26px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
                />
                <Box
                    sx={{
                        px: '13px',
                        py: '10px',
                        borderRadius: '4px 16px 16px 16px',
                        bgcolor: p.mint,
                        color: p.ink,
                        fontFamily: inter,
                        fontSize: '12px',
                        lineHeight: 1.45,
                    }}
                >
                    Фото и файлы на месте. Уже смотрю.
                </Box>
            </Box>
            <Box
                sx={{
                    alignSelf: 'flex-end',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '9px',
                    maxWidth: '86%',
                    px: '11px',
                    py: '9px',
                    borderRadius: '12px',
                    border: '1px solid',
                    borderColor: p.line,
                    bgcolor: p.card,
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        placeItems: 'center',
                        width: '26px',
                        height: '26px',
                        borderRadius: '7px',
                        bgcolor: p.mint,
                        color: p.teal,
                        flexShrink: 0,
                    }}
                >
                    <Paperclip size={13} />
                </Box>
                <Box sx={{ minWidth: 0 }}>
                    <Box
                        sx={{
                            fontFamily: inter,
                            fontSize: '10.5px',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            color: p.ink,
                        }}
                    >
                        Aquarium.pdf
                    </Box>
                    <Box
                        sx={{
                            fontFamily: inter,
                            fontSize: '9.5px',
                            lineHeight: 1.2,
                            color: p.faint,
                            mt: '2px',
                        }}
                    >
                        3,6 МБ
                    </Box>
                </Box>
                <Check size={12} weight="bold" color={p.teal} aria-hidden="true" />
            </Box>
        </Box>
    )
}

function BlogMock({ p }) {
    return (
        <Box sx={{ mt: 'auto', pt: '24px' }}>
            <Box
                sx={{
                    borderRadius: '18px',
                    border: '1px solid',
                    borderColor: p.line,
                    bgcolor: p.cardHover,
                    p: '12px',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Box
                        component="img"
                        src="/img/aquarium/user-maxim.jpg"
                        alt=""
                        sx={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <Box>
                        <Box
                            sx={{
                                fontFamily: inter,
                                fontSize: '10.5px',
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
                                fontSize: '9px',
                                lineHeight: 1.2,
                                color: p.faint,
                                mt: '2px',
                            }}
                        >
                            4 дня назад
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        mt: '10px',
                        fontFamily: inter,
                        fontSize: '11.5px',
                        lineHeight: 1.4,
                        color: p.ink,
                    }}
                >
                    Август балует видами
                </Box>
                <Box
                    component="img"
                    src="/img/aquarium/post-maxim-1.jpg"
                    alt=""
                    loading="lazy"
                    sx={{
                        display: 'block',
                        width: '100%',
                        height: '96px',
                        mt: '9px',
                        borderRadius: '10px',
                        objectFit: 'cover',
                    }}
                />
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', mt: '10px', color: p.faint }}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px' }}>
                        <Heart size={13} />
                        4
                    </Box>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '10px' }}>
                        <ChatCircle size={13} />
                        1
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function CallMock({ p }) {
    return (
        <Box sx={{ mt: 'auto', pt: '24px' }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '11px',
                    p: '12px',
                    borderRadius: '16px',
                    border: '1px solid',
                    borderColor: p.line,
                    bgcolor: p.cardHover,
                }}
            >
                <Box sx={{ position: 'relative', flexShrink: 0 }}>
                    <Box
                        component="img"
                        src="/img/aquarium/user-sasha.jpg"
                        alt=""
                        sx={{ width: '38px', height: '38px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <Box
                        aria-hidden="true"
                        sx={{
                            position: 'absolute',
                            right: '-1px',
                            bottom: '-1px',
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            bgcolor: p.tealFill,
                            border: '2px solid',
                            borderColor: p.cardHover,
                        }}
                    />
                </Box>
                <Box sx={{ minWidth: 0, flex: 1 }}>
                    <Box
                        sx={{
                            fontFamily: inter,
                            fontSize: '11.5px',
                            fontWeight: 600,
                            color: p.ink,
                            lineHeight: 1.25,
                        }}
                    >
                        Александра
                    </Box>
                    <Box
                        sx={{
                            fontFamily: inter,
                            fontSize: '9.5px',
                            color: p.faint,
                            lineHeight: 1.25,
                            mt: '3px',
                        }}
                    >
                        Видеозвонок · 12:48
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'grid',
                        placeItems: 'center',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        bgcolor: p.mint,
                        color: p.teal,
                    }}
                >
                    <VideoCamera size={14} />
                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: '8px', mt: '10px' }}>
                {[
                    { icon: Microphone, label: 'Микрофон' },
                    { icon: VideoCamera, label: 'Камера' },
                    { icon: PhoneDisconnect, label: 'Завершить', danger: true },
                ].map((item) => {
                    const Icon = item.icon
                    return (
                        <Box
                            key={item.label}
                            aria-label={item.label}
                            sx={{
                                display: 'grid',
                                placeItems: 'center',
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                bgcolor: item.danger ? '#d85555' : p.mint,
                                color: item.danger ? '#fff' : p.teal,
                            }}
                        >
                            <Icon size={15} />
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}

function StickersMock() {
    const stickers = [
        { icon: FishSimple, bg: '#0fbab5', color: '#ffffff', rotate: '-8deg', size: '74px' },
        { icon: Smiley, bg: '#b9f0ec', color: '#065b57', rotate: '6deg', size: '68px' },
        { icon: Heart, bg: '#062f2d', color: '#6fe6df', rotate: '-3deg', size: '62px' },
    ]

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: '4px', md: '0px' },
                flex: 1,
                minHeight: '110px',
                mt: '18px',
                pt: '6px',
            }}
        >
            {stickers.map((item, index) => {
                const Icon = item.icon
                return (
                    <Box
                        key={index}
                        aria-hidden="true"
                        sx={{
                            display: 'grid',
                            placeItems: 'center',
                            width: item.size,
                            height: item.size,
                            ml: index === 0 ? 0 : { xs: '-8px', md: '-12px' },
                            borderRadius: '26px',
                            bgcolor: item.bg,
                            color: item.color,
                            transform: `rotate(${item.rotate})`,
                            boxShadow: '0 14px 30px rgba(4, 40, 38, .12)',
                            transition: 'transform .35s cubic-bezier(.22,1,.36,1)',
                            '&:hover': { transform: `rotate(${item.rotate}) translateY(-6px) scale(1.04)` },
                        }}
                    >
                        <Icon size={34} weight="fill" />
                    </Box>
                )
            })}
        </Box>
    )
}

function SecurityMock({ p }) {
    return (
        <Box sx={{ mt: 'auto', pt: '18px' }}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['Шифрование', 'Модерация', 'Минимум данных'].map((label) => (
                    <Box
                        key={label}
                        component="span"
                        sx={{
                            px: '9px',
                            py: '5px',
                            borderRadius: '999px',
                            bgcolor: p.mint,
                            color: p.tealDeep,
                            fontFamily: inter,
                            fontSize: '9px',
                            fontWeight: 600,
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {label}
                    </Box>
                ))}
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    mt: '14px',
                    color: p.teal,
                    fontFamily: inter,
                    fontSize: '11px',
                    fontWeight: 500,
                }}
            >
                <ShieldCheck size={17} weight="fill" aria-hidden="true" />
                Спокойствие по умолчанию
            </Box>
        </Box>
    )
}

export default function AquariumProjectPage() {
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const p = getPalette(dark)
    const [heroPost, setHeroPost] = useState(() => pickRandomPost())

    const shuffleHeroPost = () => {
        setHeroPost((current) => pickRandomPost(current.name))
    }

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
                aria-labelledby="aquarium-page-title"
                sx={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    minHeight: '100svh',
                    overflow: 'hidden',
                    bgcolor: '#04211f',
                    color: '#eafaf8',
                    backgroundImage:
                        'radial-gradient(900px 540px at 82% 8%, rgba(15, 186, 181, .30), transparent 62%), radial-gradient(640px 460px at 4% 96%, rgba(15, 186, 181, .14), transparent 64%)',
                    pt: { xs: 'clamp(96px, 14vw, 124px)', md: 'clamp(104px, 12vh, 148px)' },
                    pb: { xs: 'clamp(48px, 9vw, 72px)', md: 'clamp(56px, 9vh, 100px)' },
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        right: '-12%',
                        top: '12%',
                        width: 'min(760px, 70vw)',
                        color: '#0fbab5',
                        opacity: 0.055,
                        pointerEvents: 'none',
                    }}
                >
                    <AquariumMark style={{ width: '100%', height: 'auto' }} />
                </Box>
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        opacity: 0.1,
                        pointerEvents: 'none',
                        backgroundImage: 'var(--noise-texture)',
                        backgroundSize: '180px 180px',
                    }}
                />

                <Box
                    sx={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '1500px',
                        mx: 'auto',
                        px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .66fr) minmax(0, 1.34fr)' },
                        gap: { xs: 'clamp(44px, 8vw, 64px)', lg: 'clamp(40px, 5vw, 80px)' },
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Box
                            component="h1"
                            id="aquarium-page-title"
                            aria-label="Аквариум"
                            sx={{
                                m: 0,
                                mt: { xs: '24px', md: '34px' },
                                width: { xs: 'clamp(190px, 58vw, 250px)', md: 'clamp(230px, 22vw, 330px)' },
                                color: '#ffffff',
                                lineHeight: 0,
                            }}
                        >
                            <AquariumLogo style={{ display: 'block', width: '100%', height: 'auto' }} />
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: { xs: '26px', md: '34px' },
                                maxWidth: '18ch',
                                fontFamily: inter,
                                fontSize: 'clamp(26px, 3.6vw, 44px)',
                                fontWeight: 600,
                                lineHeight: 1.06,
                                letterSpacing: '-0.045em',
                                color: '#f2fdfc',
                                textWrap: 'balance',
                            }}
                        >
                            Мессенджер и микроблог в одном приложении
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: '18px',
                                maxWidth: '42ch',
                                fontFamily: inter,
                                fontSize: 'clamp(14px, 1.2vw, 16px)',
                                lineHeight: 1.65,
                                color: 'rgba(234, 250, 248, .66)',
                            }}
                        >
                            Переписывайтесь, звоните и делитесь мыслями в ленте.
                            Всё в одном пространстве.
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mt: { xs: '26px', md: '34px' } }}>
                            <Box
                                component="a"
                                href="https://aquarium.org.ru"
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
                                Открыть
                            </Box>
                            <Box
                                component={Link}
                                to="https://aquarium.org.ru/apps"
                                target="_blank"
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
                                Скачать приложение
                            </Box>
                            {/* <Box
                                component="button"
                                type="button"
                                onClick={shuffleHeroPost}
                                aria-label="Показать другую случайную запись"
                                title="Другая случайная запись"
                                sx={{
                                    ...buttonBase,
                                    width: '48px',
                                    minWidth: '48px',
                                    px: 0,
                                    border: '1px solid',
                                    borderColor: 'rgba(234, 250, 248, .24)',
                                    bgcolor: 'rgba(255,255,255,.03)',
                                    color: '#eafaf8',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        borderColor: 'rgba(234, 250, 248, .5)',
                                        bgcolor: 'rgba(255,255,255,.07)',
                                    },
                                    '&:focus-visible': {
                                        outline: '2px solid #2ed0ca',
                                        outlineOffset: '3px',
                                    },
                                }}
                            >
                                <Shuffle size={18} weight="bold" aria-hidden="true" />
                            </Box> */}
                        </Box>
                    </Box>

                    <HeroVisual heroPost={heroPost} dark={dark} />
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-features-title"
                sx={{
                    position: 'relative',
                    bgcolor: p.featureBg,
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    py: { xs: 'clamp(64px, 10vw, 88px)', md: 'clamp(90px, 10vw, 140px)' },
                }}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, 1.15fr) minmax(0, .85fr)' },
                            gap: { xs: '18px', lg: 'clamp(32px, 6vw, 90px)' },
                            alignItems: 'end',
                            mb: { xs: '30px', md: 'clamp(40px, 5vw, 64px)' },
                        }}
                    >
                        <Box>
                            <Box
                                component="h2"
                                id="aquarium-features-title"
                                sx={{
                                    m: 0,
                                    mt: '14px',
                                    maxWidth: '14ch',
                                    fontFamily: inter,
                                    fontSize: 'clamp(2.4rem, 5.8vw, 5.2rem)',
                                    fontWeight: 600,
                                    lineHeight: 0.95,
                                    letterSpacing: '-0.055em',
                                    color: p.ink,
                                    textWrap: 'balance',
                                }}
                            >
                                Возможности Аквариума
                            </Box>
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                maxWidth: '38ch',
                                justifySelf: { lg: 'end' },
                                fontFamily: inter,
                                fontSize: '14.5px',
                                lineHeight: 1.6,
                                color: p.muted,
                            }}
                        >
                            Один мессенджер вместо десятка других: сообщения, лента, звонки и профиль — всё в одном пространстве.
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'minmax(0, 1fr)',
                                md: 'repeat(2, minmax(0, 1fr))',
                                lg: 'repeat(12, minmax(0, 1fr))',
                            },
                            gap: { xs: '12px', md: '16px' },
                        }}
                    >
                        <FeatureCard
                            p={p}
                            icon={ChatCircleDots}
                            title="Сообщения"
                            text="Личные и групповые чаты с фото и файлами. Быстро и привычно."
                            sx={{
                                gridColumn: { xs: 'auto', md: 'span 2', lg: 'span 7' },
                                minHeight: { xs: '340px', md: '360px' },
                            }}
                        >
                            <ChatMock p={p} />
                        </FeatureCard>

                        <FeatureCard
                            p={p}
                            icon={Article}
                            title="Микроблог"
                            text="Делитесь записями в общей ленте: тексты, фотографии, лайки и комментарии."
                            sx={{
                                gridColumn: { xs: 'auto', md: 'span 1', lg: 'span 5' },
                                minHeight: { xs: '360px', md: '360px' },
                            }}
                        >
                            <BlogMock p={p} />
                        </FeatureCard>

                        <FeatureCard
                            p={p}
                            icon={PhoneCall}
                            title="Звонки"
                            text="Аудио- и видеозвонки прямо из чата. Когда переписки уже мало."
                            sx={{
                                gridColumn: { xs: 'auto', md: 'span 1', lg: 'span 4' },
                                minHeight: { xs: '280px', md: '300px' },
                            }}
                        >
                            <CallMock p={p} />
                        </FeatureCard>

                        <FeatureCard
                            p={p}
                            icon={Sticker}
                            title="Стикеры"
                            text="Фирменные наборы стикеров. Немного иронии и эмоций для ваших чатов."
                            sx={{
                                gridColumn: { xs: 'auto', md: 'span 1', lg: 'span 4' },
                                minHeight: { xs: '280px', md: '300px' },
                            }}
                        >
                            <StickersMock />
                        </FeatureCard>

                        <FeatureCard
                            p={p}
                            icon={ShieldCheck}
                            title="Безопасность"
                            text="Защита данных, модерация контента, минимум персональных данных."
                            sx={{
                                gridColumn: { xs: 'auto', md: 'span 1', lg: 'span 4' },
                                minHeight: { xs: '270px', md: '300px' },
                            }}
                        >
                            <SecurityMock p={p} />
                        </FeatureCard>

                        <Box
                            sx={{
                                gridColumn: { xs: 'auto', md: 'span 2', lg: 'span 12' },
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: 'minmax(0, 1fr) auto' },
                                gap: '20px 32px',
                                alignItems: 'center',
                                p: { xs: '22px', md: 'clamp(24px, 2.4vw, 32px)' },
                                borderRadius: '26px',
                                border: '1px solid',
                                borderColor: p.line,
                                bgcolor: p.card,
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                                <Box
                                    sx={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        width: '38px',
                                        height: '38px',
                                        borderRadius: '12px',
                                        bgcolor: p.mint,
                                        color: p.teal,
                                        flexShrink: 0,
                                    }}
                                >
                                    <Devices size={19} aria-hidden="true" />
                                </Box>
                                <Box>
                                    <Box
                                        component="h3"
                                        sx={{
                                            m: 0,
                                            fontFamily: inter,
                                            fontSize: 'clamp(18px, 1.6vw, 21px)',
                                            fontWeight: 600,
                                            lineHeight: 1.15,
                                            letterSpacing: '-0.025em',
                                            color: p.ink,
                                        }}
                                    >
                                        Все платформы
                                    </Box>
                                    <Box
                                        component="p"
                                        sx={{
                                            m: 0,
                                            mt: '7px',
                                            maxWidth: '58ch',
                                            fontFamily: inter,
                                            fontSize: '13.5px',
                                            lineHeight: 1.55,
                                            color: p.muted,
                                        }}
                                    >
                                        Веб-версия, iOS и Android. Начните на телефоне —
                                        продолжите за компьютером.
                                    </Box>
                                </Box>
                            </Box>

                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {[
                                    { icon: Laptop, label: 'Веб' },
                                    { icon: DeviceMobile, label: 'iOS' },
                                    { icon: GlobeHemisphereWest, label: 'Android' },
                                ].map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <Box
                                            component="span"
                                            key={item.label}
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                gap: '7px',
                                                px: '12px',
                                                py: '9px',
                                                borderRadius: '999px',
                                                border: '1px solid',
                                                borderColor: p.line,
                                                bgcolor: p.featureBg,
                                                color: p.ink,
                                                fontFamily: inter,
                                                fontSize: '11px',
                                                fontWeight: 600,
                                                lineHeight: 1,
                                            }}
                                        >
                                            <Icon size={13} aria-hidden="true" />
                                            {item.label}
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-final-title"
                sx={{
                    maxWidth: '1500px',
                    mx: 'auto',
                    py: { xs: 'clamp(48px, 8vw, 64px)', md: 'clamp(64px, 8vw, 100px)' },
                }}
            >
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

                    <Box sx={{ position: 'relative', maxWidth: '900px' }}>
                        <Box
                            component="h2"
                            id="aquarium-final-title"
                            sx={{
                                m: 0,
                                mt: '16px',
                                fontFamily: inter,
                                fontSize: 'clamp(2.2rem, 5.4vw, 4.8rem)',
                                fontWeight: 600,
                                lineHeight: 0.98,
                                letterSpacing: '-0.055em',
                                color: '#f4fefd',
                                textWrap: 'balance',
                            }}
                        >
                            Сообщения, лента и звонки
                        </Box>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: '16px',
                                maxWidth: '36ch',
                                fontFamily: inter,
                                fontSize: 'clamp(15px, 1.5vw, 19px)',
                                lineHeight: 1.5,
                                color: 'rgba(234, 250, 248, .68)',
                            }}
                        >
                            Приложение для iOS и Android в маркетах.
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
                                Скачать приложение
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
                            component="a"
                            href="https://aquarium.org.ru/welcome"
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
                            О проекте
                            <ArrowUpRight size={13} aria-hidden="true" />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
