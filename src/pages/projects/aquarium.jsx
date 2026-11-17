import { useId, useState } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme, useTheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import {
    ArrowRight,
    ArrowUpRight,
    Browser,
    ChatCircleDots,
    ChatsCircleIcon,
    Checks,
    Devices,
    EnvelopeSimple,
    GithubLogo,
    Key,
    LockKey,
    MegaphoneIcon,
    PhoneCall,
    Prohibit,
    SealCheck,
    ShieldCheck,
    Shuffle,
    SignIn,
    Sparkle,
    Sticker,
} from '@phosphor-icons/react'
import AquariumLogo from '../../components/aquarium-logo'
import AquariumMark from '../../components/aquarium-mark'
import CaseBrowser from '../../components/case-browser'
import { FeedGroup, Post } from '../../components/aquarium-post'
import usePageBackground from '../../components/use-page-background'
import useFancybox from '../../components/use-fancybox'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import posts from '../../data/aquarium-posts'

const getPalette = (dark) => dark
    ? {
        page: '#121212',
        ink: '#eafaf8',
        heading: '#ffffff',
        muted: 'rgba(234, 250, 248, .66)',
        faint: 'rgba(234, 250, 248, .42)',
        line: 'rgba(234, 250, 248, .13)',
        card: '#0b2422',
        cardHover: '#0e2c29',
        mint: '#10302d',
        bubble: '#163a36',
        teal: '#45d9d2',
        tealFill: '#14c4be',
        featureBg: '#121212',
        screensBg: '#0b0b0b',
    }
    : {
        page: '#f8fafc',
        ink: '#072b29',
        heading: '#000000',
        muted: 'rgba(7, 43, 41, .64)',
        faint: 'rgba(7, 43, 41, .43)',
        line: 'rgba(7, 43, 41, .12)',
        card: '#ffffff',
        cardHover: '#f7fefd',
        mint: '#def6f3',
        bubble: '#def6f3',
        teal: '#087b76',
        tealFill: '#0fbab5',
        featureBg: '#f8fafc',
        screensBg: '#ffffff',
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

const heroPhoneWidth = 'clamp(160px, 15vw, 220px)'

function pickRandomPost(currentName) {
    const pool = currentName
        ? posts.filter((post) => post.name !== currentName)
        : posts
    return pool[Math.floor(Math.random() * pool.length)]
}

function HeroVisual({ heroPost, dark, postPalette }) {
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
                <Post post={heroPost} palette={postPalette} />
            </Box>
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
                <Icon size={28} weight="fill" aria-hidden="true" />
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
                    color: p.heading,
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
        </Box>
    )
}


const sectionSx = {
    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
    py: { xs: 'clamp(40px, 7vw, 56px)', md: 'clamp(56px, 6.5vw, 96px)' },
}

const sectionTitleSx = (p) => ({
    m: 0,
    fontFamily: inter,
    fontSize: 'clamp(1.5rem, 4.2vw, 3rem)',
    fontWeight: 700,
    lineHeight: 1.2,
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

const chatMessages = [
    { id: 'm1', fromMe: false, text: 'Привет! Уже видел мессенджер Аквариум?', time: '12:41' },
    { id: 'm2', fromMe: true, text: 'Да, вчера скачал. Выглядит прикольно', time: '12:42' },
    { id: 'm3', fromMe: true, text: '😍', time: '12:42' },
    { id: 'm4', fromMe: false, text: 'Вот-вот! И звонки прямо из чата работают', time: '12:43' },
    { id: 'm5', fromMe: true, text: 'Давай созвонимся вечером, покажу новые стикеры ❤️', time: '12:44' },
    { id: 'm6', fromMe: false, text: 'Договорились! 🙌', time: '12:44' },
]

const startSteps = [
    {
        icon: EnvelopeSimple,
        title: 'Вводите почту',
        text: 'Никаких длинных анкет, максимально просто.',
    },
    {
        icon: ChatCircleDots,
        title: 'Получаете код',
        text: 'Мы отправим одноразовый код на почту.',
    },
    {
        icon: SignIn,
        title: 'Готово!',
        text: 'Можно писать, звонить и делиться записями.',
    },
]

const cleanAdvantages = [
    {
        icon: PhoneCall,
        title: 'Звонки на наших серверах',
        text: 'Разговаривайте спокойно, ведь вас никто не прослушивает.',
    },
    {
        icon: Prohibit,
        title: 'Никакой рекламы',
        text: 'В ленте только те, на кого вы подписаны: ни рекомендаций, ни баннеров.',
    },
    {
        icon: SealCheck,
        title: 'Доступен без ограничений',
        text: 'Без блокировок и обходных решений.',
    },
    {
        icon: Sparkle,
        title: 'Ничего лишнего',
        text: 'Один понятный сервис для общения и записей.',
    },
]

const securityItems = [
    {
        icon: Key,
        title: 'Вход без пароля',
        text: 'Вы входите по одноразовому коду из почты или через Яндекс ID.',
    },
    {
        icon: LockKey,
        title: 'Шифрованное соединение',
        text: 'Весь трафик между вами и сервером передаётся по защищённому каналу.',
    },
    {
        icon: SealCheck,
        title: 'Защита сессий',
        text: 'Доступ работает на токенах с автоматическим обновлением и защитой от подделки запросов.',
    },
    {
        icon: GithubLogo,
        title: 'Открытый код',
        text: 'Клиентская часть с открытым исходным кодом. Можно изучить, как всё устроено.',
    },
]

const timeline = [
    {
        year: '2019–2022',
        title: 'Первая идея проекта',
        text: 'Появилась идея разработать свою социальную сеть, было придумано название «Аквариум». В этот период несколько раз собирал прототип платформы.',
    },
    {
        year: '2023',
        title: 'Первая тестовая версия',
        text: 'Первая версия с рабочей авторизацией. Разработано на чистом PHP.',
    },
    {
        year: '2024',
        title: 'Добавление записей',
        text: 'Проект переписан на фреймворк Laravel. Обновлен дизайн. Добавлена возможность создавать записи.',
    },
    {
        year: '2025',
        title: 'Сообщения и звонки',
        text: 'Проект переписан на React и Node.js. Появился функционал мессенджера.',
    },
    {
        year: '2026',
        title: 'Мобильное приложение',
        text: 'Был изучен React Native и Expo. Разработано мобильное приложение для iOS и Android. Публикация в маркеты.',
    },
]

const projectStats = [
    { value: '300+', label: 'человек аудитории' },
    { value: '215', label: 'опубликованных записей' },
    { value: '200', label: 'созданных чатов' },
]

const projectScreens = [
    {
        title: 'Чат',
        text: 'Личные и групповые переписки, вложения и реакции.',
        src: 'chat',
        alt: 'Личный чат между 2 пользователями в мессенджере Аквариум'
    },
    {
        title: 'Звонок',
        text: 'Видео или аудио. Работает прямо из чата.',
        src: 'call',
        alt: 'Звонок с видео между 2 пользователями в мессенджере Аквариум'
    },
    {
        title: 'Профиль',
        text: 'Аватар, шапка, записи и подписки. Привычная кастомизация.',
        src: 'profile',
        alt: 'Профиль в мессенджере Аквариум'
    },
    {
        title: 'Лента',
        text: 'Записи друзей и любимых авторов. Без алгоритмов и рекламы.',
        src: 'feed',
        alt: 'Записи пользователей в мессенджере Аквариум'
    },
    {
        title: 'Создание записи',
        text: 'Редактор с фото, ссылками и эмодзи. Темы и настройки публикации.',
        src: 'create-post',
        alt: 'Страница создания записи в мессенджере Аквариум'
    },
    {
        title: 'Поиск',
        text: 'Найдите интересных людей и понравившиеся записи.',
        src: 'search',
        alt: 'Страница поиска в мессенджере Аквариум'
    },
]

const stack = [
    {
        label: 'Клиент',
        title: 'React и Joy UI',
        text: 'Интерфейс, роутинг и анимации. Редактор записей TipTap: фото, ссылки и форматирование.',
    },
    {
        label: 'Сервер',
        title: 'Node.js и Express',
        text: 'REST API, Sequelize и MySQL 8.0: пользователи, записи, чаты и уведомления.',
    },
    {
        label: 'Реальное время',
        title: 'WebSocket',
        text: 'Библиотека Socket.IO: сообщения, реакции и статус прочтения приходят мгновенно, без перезагрузки.',
    },
    {
        label: 'Звонки',
        title: 'WebRTC и coturn',
        text: 'Свой STUN и TURN-сервер: аудио- и видео-звонки один на один в браузере и приложении.',
    },
    {
        label: 'Файлы',
        title: 'S3 и файловое хранилище',
        text: 'Фото, видео и вложения живут в S3-хранилище, превью готовят sharp и ffmpeg.',
    },
    {
        label: 'Авторизация',
        title: 'JWT и Яндекс ID',
        text: 'Access и refresh токены, одноразовые коды на почту и OAuth Яндекса в браузере.',
    },
]

const repositories = [
    {
        label: 'Веб-клиент',
        href: 'https://github.com/DanyaBooba/aquarium-web-client',
    },
    {
        label: 'Мобильное приложение',
        href: 'https://github.com/DanyaBooba/aquarium-mobile-app',
    },
]

const postColumns = {
    left: posts.filter((_, index) => index % 2 === 0),
    right: posts.filter((_, index) => index % 2 === 1),
}

function IconBadge({ p, icon: Icon, bg }) {
    return (
        <Box
            aria-hidden="true"
            sx={{
                display: 'grid',
                placeItems: 'center',
                width: '52px',
                height: '52px',
                borderRadius: '12px',
                bgcolor: bg,
                color: p.teal,
                flexShrink: 0,
            }}
        >
            <Icon size={28} weight="fill" />
        </Box>
    )
}

function FeedColumn({ groupPosts, className, height, palette }) {
    return (
        <Box
            aria-hidden="true"
            sx={{
                width: '100%',
                height,
                // mx: { xs: 0, sm: 0, md: 'auto' },
                overflow: 'hidden',
                maskImage: 'linear-gradient(180deg, transparent 0%, #000 6%, #000 94%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, #000 6%, #000 94%, transparent 100%)',
            }}
        >
            <Box className={className ? `aquarium-feed ${className}` : 'aquarium-feed'}>
                <FeedGroup posts={groupPosts} palette={palette} />
                <FeedGroup posts={groupPosts} hidden palette={palette} />
            </Box>
        </Box>
    )
}

const emojiOnlyPattern = /^(?:\p{Extended_Pictographic}|\uFE0F|\u200D)+$/u

function isEmojiOnly(text) {
    return emojiOnlyPattern.test(text.trim())
}

function ChatMeta({ time, read, dark }) {
    return (
        <Box
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: '6px',
                py: '2px',
                borderRadius: '999px',
                bgcolor: dark ? '#1a1a1a' : '#f1f5f9',
                fontFamily: inter,
                fontSize: '12px',
                fontWeight: 600,
                lineHeight: 1,
                color: dark ? '#7e8389' : '#7d848c',
            }}
        >
            {time}
            {read ? (
                <Checks
                    size={18}
                    weight="bold"
                    color="#1d807d"
                    aria-hidden="true"
                    style={{ marginLeft: '2px', display: 'block' }}
                />
            ) : null}
        </Box>
    )
}

function ChatPreview({ dark }) {
    return (
        <Box
            aria-hidden="true"
            sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
            }}
        >
            {chatMessages.map((message) => {
                const emojiOnly = isEmojiOnly(message.text)
                const bubble = emojiOnly ? (
                    <Box component="span" sx={{ fontSize: '64px', lineHeight: 1 }}>
                        {message.text}
                    </Box>
                ) : (
                    <Box
                        sx={{
                            maxWidth: message.fromMe ? '78%' : '100%',
                            px: '16px',
                            py: '8.5px',
                            borderRadius: '20px',
                            bgcolor: message.fromMe ? '#1d807d' : (dark ? '#1a1a1a' : '#f1f5f9'),
                            color: message.fromMe ? '#ffffff' : (dark ? '#ffffff' : '#000000'),
                        }}
                    >
                        <Box component="span" sx={{ fontFamily: inter, fontSize: '15px', lineHeight: '1.4' }}>
                            {message.text}
                        </Box>
                    </Box>
                )

                if (message.fromMe) {
                    return (
                        <Box
                            key={message.id}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-end',
                                gap: '4px',
                            }}
                        >
                            {bubble}
                            <ChatMeta time={message.time} read dark={dark} />
                        </Box>
                    )
                }

                return (
                    <Box
                        key={message.id}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            gap: '4px',
                        }}
                    >
                        {bubble}
                        <ChatMeta time={message.time} dark={dark} />
                    </Box>
                )
            })}
        </Box>
    )
}

export default function AquariumProjectPage() {
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const theme = useTheme()
    const p = getPalette(dark)
    const postPalette = theme.vars.palette.aquarium
    const screensGalleryId = useId().replaceAll(':', '')
    usePageBackground(p.page)
    useFancybox(`[data-fancybox="${screensGalleryId}"]`)
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
                                fontSize: 'clamp(22px, 3.6vw, 36px)',
                                fontWeight: 600,
                                lineHeight: 1.06,
                                letterSpacing: '-0.045em',
                                color: '#ffffff',
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

                    <HeroVisual heroPost={heroPost} dark={dark} postPalette={postPalette} />
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-story-title"
                sx={{
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                    pt: { xs: 'clamp(48px, 8vw, 64px)', md: 'clamp(72px, 8vw, 120px)' },
                    pb: { xs: 'clamp(44px, 7vw, 60px)', md: 'clamp(56px, 6.5vw, 96px)' },
                }}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .78fr) minmax(0, 1.22fr)' },
                            gap: { xs: '34px', lg: 'clamp(40px, 7vw, 110px)' },
                            alignItems: 'start',
                        }}
                    >
                        <Box sx={{ position: { lg: 'sticky' }, top: { lg: '120px' } }}>
                            <Box
                                component="h2"
                                id="aquarium-story-title"
                                sx={{ ...sectionTitleSx(p), mt: '12px' }}
                            >
                                История разработки проекта
                            </Box>
                            <Box component="p" sx={{ ...sectionTextSx(p), maxWidth: '38ch' }}>
                                Аквариум представляет собой веб-сайт и мобильное приложение, которое объединяет мессенджер и микроблог.
                            </Box>
                            <Box component="p" sx={{ ...sectionTextSx(p), maxWidth: '38ch' }}>
                                У пользователей есть возможность оставлять публичные записи, кастомизировать личный профиль, вести общение с друзьями и созваниваться по видео или аудио.
                            </Box>
                            <Box component="p" sx={{ ...sectionTextSx(p), maxWidth: '38ch' }}>
                                Название «Аквариум» – метафора над настоящей водной средой, в которой живут и коммуницируют рыбы, которым ничего не угрожает.
                            </Box>
                        </Box>

                        <Box>
                            {timeline.map((item, index) => (
                                <Box
                                    key={item.year}
                                    sx={{
                                        display: 'grid',
                                        gridTemplateColumns: {
                                            xs: '96px minmax(0, 1fr)',
                                            sm: '104px minmax(0, 1fr)',
                                        },
                                        gap: { xs: '14px', md: '20px' },
                                        py: { xs: '20px', md: '24px' },
                                        borderTop: index === 0 ? 'none' : '1px solid',
                                        borderColor: p.line,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            fontFamily: inter,
                                            fontSize: 'clamp(16px, 1.5vw, 20px)',
                                            fontWeight: 600,
                                            lineHeight: 1.2,
                                            letterSpacing: '-0.02em',
                                            color: p.teal,
                                            whiteSpace: 'nowrap',
                                        }}
                                    >
                                        {item.year}
                                    </Box>
                                    <Box>
                                        <Box
                                            component="h3"
                                            sx={{
                                                m: 0,
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
                                                mt: '6px',
                                                maxWidth: '46ch',
                                                fontFamily: inter,
                                                fontSize: '13.5px',
                                                lineHeight: 1.55,
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

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                            gap: { xs: '18px 14px', md: 'clamp(24px, 5vw, 72px)' },
                            mt: { xs: 'clamp(30px, 6vw, 44px)', md: 'clamp(44px, 6vw, 72px)' },
                            py: { xs: '26px', md: 'clamp(28px, 3vw, 40px)' },
                            borderTop: '1px solid',
                            borderBottom: '1px solid',
                            borderColor: p.line,
                        }}
                    >
                        {projectStats.map((stat) => (
                            <Box key={stat.label}>
                                <Box
                                    sx={{
                                        fontFamily: inter,
                                        fontSize: 'clamp(2.1rem, 5.4vw, 4.8rem)',
                                        fontWeight: 600,
                                        lineHeight: 0.9,
                                        letterSpacing: '-0.06em',
                                        color: p.heading,
                                    }}
                                >
                                    {stat.value}
                                </Box>
                                <Box
                                    sx={{
                                        mt: '10px',
                                        maxWidth: '16ch',
                                        fontFamily: inter,
                                        fontSize: 'clamp(11.5px, 1vw, 13px)',
                                        lineHeight: 1.5,
                                        color: p.muted,
                                    }}
                                >
                                    {stat.label}
                                </Box>
                            </Box>
                        ))}
                    </Box>
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
                                    color: p.heading,
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
                            Один мессенджер вместо десятка других: сообщения, лента, звонки и профиль – всё в одном пространстве.
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'minmax(0, 1fr)',
                                md: 'repeat(2, minmax(0, 1fr))',
                                lg: 'repeat(3, minmax(0, 1fr))',
                            },
                            gridAutoRows: '1fr',
                            gap: { xs: '12px', md: '16px' },
                        }}
                    >
                        <FeatureCard
                            p={p}
                            icon={ChatsCircleIcon}
                            title="Сообщения"
                            text="Личные и групповые чаты с фото и файлами. Быстро и привычно."
                        />

                        <FeatureCard
                            p={p}
                            icon={MegaphoneIcon}
                            title="Микроблог"
                            text="Делитесь записями в общей ленте: тексты, фотографии, лайки и комментарии."
                        />

                        <FeatureCard
                            p={p}
                            icon={PhoneCall}
                            title="Звонки"
                            text="Аудио- и видеозвонки прямо из чата. Когда переписки уже мало."
                        />

                        <FeatureCard
                            p={p}
                            icon={Sticker}
                            title="Стикеры"
                            text="Фирменные наборы стикеров. Немного иронии и эмоций для ваших чатов."
                        />

                        <FeatureCard
                            p={p}
                            icon={Devices}
                            title="Все платформы"
                            text="Веб-версия, iOS и Android. Начните на телефоне — продолжите за компьютером."
                        />

                        <FeatureCard
                            p={p}
                            icon={ShieldCheck}
                            title="Безопасность"
                            text="Защита данных, модерация контента, минимум персональных данных."
                        />
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-microblog-title"
                sx={{
                    ...sectionSx,
                    pt: 0,
                }}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'minmax(0, .78fr) minmax(0, 1.22fr)' },
                            gap: { xs: 'clamp(28px, 6vw, 44px)', lg: 'clamp(40px, 5vw, 90px)' },
                            alignItems: 'center',
                        }}
                    >
                        <Box>
                            <Box
                                component="h2"
                                id="aquarium-microblog-title"
                                sx={{ ...sectionTitleSx(p), maxWidth: '20ch' }}
                            >
                                Лента, в которой приятно находиться
                            </Box>
                            <Box component="p" sx={sectionTextSx(p)}>
                                Записи друзей и любимых авторов, без алгоритмов и рекламы.
                                Публикуйте мысли и фотографии, собирайте лайки и обсуждайте
                                в комментариях.
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: 'minmax(0, 1fr)', lg: 'repeat(2, minmax(0, 1fr))' },
                                gap: '12px',
                                width: '100%',
                                justifySelf: { lg: 'end' },
                            }}
                        >
                            <FeedColumn
                                groupPosts={postColumns.left}
                                height={{ xs: '420px', md: '620px' }}
                                palette={postPalette}
                            />
                            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                                <FeedColumn
                                    groupPosts={postColumns.right}
                                    className="aquarium-feed--right"
                                    height={{ xs: '420px', md: '620px' }}
                                    palette={postPalette}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-messenger-title"
                sx={sectionSx}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: 'repeat(2, minmax(0, 1fr))' },
                            gap: { xs: 'clamp(28px, 6vw, 44px)', md: 'clamp(32px, 5vw, 80px)' },
                            alignItems: 'center',
                        }}
                    >
                        <Box sx={{ order: { xs: 2, md: 1 } }}>
                            <ChatPreview dark={dark} />
                        </Box>
                        <Box sx={{ order: { xs: 1, md: 2 } }}>
                            <Box
                                component="h2"
                                id="aquarium-messenger-title"
                                sx={{ ...sectionTitleSx(p), maxWidth: '16ch' }}
                            >
                                Общение без границ между устройствами
                            </Box>
                            <Box component="p" sx={sectionTextSx(p)}>
                                Чаты синхронизируются между веб-версией и мобильным приложением.
                                Стикеры, вложения и звонки работают везде одинаково. Просто
                                продолжайте разговор там, где вам удобно.
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-screens-title"
                sx={{
                    ...sectionSx,
                    bgcolor: p.screensBg,
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
                            mb: { xs: '28px', md: 'clamp(36px, 4vw, 52px)' },
                        }}
                    >
                        <Box>
                            <Box
                                component="h2"
                                id="aquarium-screens-title"
                                sx={{ ...sectionTitleSx(p), mt: '12px', maxWidth: '12ch' }}
                            >
                                Скриншоты веб-версии
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
                            Была произведена долгая и кропотливая работа над каждой страницей, структурой проекта, дизайном и функциональностью.
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: 'minmax(0, 1fr)',
                                sm: 'repeat(2, minmax(0, 1fr))',
                                lg: 'repeat(3, minmax(0, 1fr))',
                            },
                            gap: '12px',
                        }}
                    >
                        {projectScreens.map((screen) => {
                            const screenSrc = `/img/pages/aquarium/${screen.src}@${dark ? 'dark' : 'light'}.jpg`

                            return (
                                <Box key={screen.title}>
                                    <Box
                                        component="a"
                                        href={screenSrc}
                                        data-fancybox={screensGalleryId}
                                        data-caption={screen.alt ?? screen.title}
                                        aria-label={`Открыть скриншот «${screen.title}»`}
                                        sx={{
                                            position: 'relative',
                                            display: 'block',
                                            aspectRatio: '16 / 10',
                                            overflow: 'hidden',
                                            borderRadius: '12px',
                                            bgcolor: p.card,
                                            cursor: 'zoom-in',
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={screenSrc}
                                            alt={screen.alt ?? screen.title}
                                            loading="lazy"
                                            decoding="async"
                                            sx={{
                                                position: 'absolute',
                                                inset: 0,
                                                display: 'block',
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'top center',
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        component="h3"
                                        sx={{
                                            m: 0,
                                            mt: '14px',
                                            fontFamily: inter,
                                            fontSize: '15px',
                                            fontWeight: 600,
                                            lineHeight: 1.25,
                                            letterSpacing: '-0.015em',
                                            color: p.heading,
                                        }}
                                    >
                                        {screen.title}
                                    </Box>
                                    <Box
                                        component="p"
                                        sx={{
                                            m: 0,
                                            mt: '5px',
                                            maxWidth: '30ch',
                                            fontFamily: inter,
                                            fontSize: '13px',
                                            lineHeight: 1.5,
                                            color: p.muted,
                                        }}
                                    >
                                        {screen.text}
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                </Box>
            </Box>

            <Box
                component="section"
                aria-labelledby="aquarium-stack-title"
                sx={sectionSx}
            >
                <Box sx={{ maxWidth: '1500px', mx: 'auto' }}>
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: { xs: '1fr', lg: 'minmax(0, .8fr) minmax(0, 1.2fr)' },
                            gap: { xs: '34px', lg: 'clamp(40px, 7vw, 110px)' },
                            alignItems: 'start',
                        }}
                    >
                        <Box sx={{ position: { lg: 'sticky' }, top: { lg: '120px' } }}>
                            <Box
                                component="h2"
                                id="aquarium-stack-title"
                                sx={{ ...sectionTitleSx(p), mt: '12px', maxWidth: '12ch' }}
                            >
                                Архитектура проекта
                            </Box>
                            <Box component="p" sx={{ ...sectionTextSx(p), maxWidth: '36ch' }}>
                                Разбор модулей серверной части приложения, благодаря которому работают веб-клиент и мобильные приложения.
                            </Box>
                        </Box>

                        <Box>
                            {stack.map((item, index) => (
                                <Box
                                    key={item.title}
                                    sx={{
                                        py: { xs: '20px', md: '24px' },
                                        ...(index !== 0 && {
                                            borderTop: '1px solid',
                                            borderColor: p.line,
                                        })
                                    }}
                                >
                                    <Box sx={{ ...kickerSx, fontSize: '9px', color: p.teal }}>
                                        {item.label}
                                    </Box>
                                    <Box
                                        component="h3"
                                        sx={{
                                            m: 0,
                                            mt: '9px',
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
                                            mt: '6px',
                                            maxWidth: '46ch',
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

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'flex-start',
                            justifyContent: 'space-between',
                            gap: '16px 32px',
                            mt: { xs: 'clamp(32px, 6vw, 44px)', md: 'clamp(44px, 6vw, 72px)' },
                            pt: '22px',
                            borderTop: '1px solid',
                            borderColor: p.line,
                        }}
                    >
                        <Box>
                            <Box sx={{ ...kickerSx, fontSize: '9px', color: p.teal }}>
                                Открытый код
                            </Box>
                            <Box
                                component="p"
                                sx={{
                                    m: 0,
                                    mt: '8px',
                                    maxWidth: '44ch',
                                    fontFamily: inter,
                                    fontSize: '13.5px',
                                    lineHeight: 1.55,
                                    color: p.muted,
                                }}
                            >
                                Исходный код веб-клиента и мобильного приложения открыты на GitHub под лицензией GPL-3.0. Можно посмотреть, как всё устроено, использовать модули в своем проекте или предложить идею через Issue.
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {repositories.map((repo) => (
                                <Box
                                    key={repo.label}
                                    component="a"
                                    href={repo.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    sx={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '9px',
                                        px: '14px',
                                        py: '11px',
                                        borderRadius: '999px',
                                        border: '1px solid',
                                        borderColor: p.line,
                                        color: p.ink,
                                        fontFamily: inter,
                                        fontSize: '11px',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        transition: 'border-color .2s ease, background-color .2s ease',
                                        '&:hover': { borderColor: p.teal, bgcolor: p.card },
                                    }}
                                >
                                    <GithubLogo size={15} aria-hidden="true" />
                                    {repo.label}
                                    <ArrowUpRight size={13} aria-hidden="true" />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>



            <Box
                component="section"
                aria-labelledby="aquarium-final-title"
                sx={{
                    py: { xs: 'clamp(48px, 8vw, 64px)', md: 'clamp(64px, 8vw, 100px)' },
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
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
                        mx: 'auto',
                        maxWidth: '1500px'
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
                                color: '#ffffff',
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
                                href="https://aquarium.org.ru"
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    ...buttonBase,
                                    bgcolor: '#0fbab5',
                                    color: '#032422',
                                    '&:hover': { bgcolor: '#2ed0ca' },
                                }}
                            >
                                Открыть веб-версию
                            </Box>
                            <Box
                                component="a"
                                href="https://aquarium.org.ru/apps"
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
                                Скачать приложение
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
