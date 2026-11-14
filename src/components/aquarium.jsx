import Box from '@mui/joy/Box'
import { useColorScheme } from '@mui/joy/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
    ArrowsClockwise,
    ArrowUpRight,
    ChatCircle,
    ChatIcon,
    DotsThreeVertical,
    Heart,
    ShareIcon,
} from '@phosphor-icons/react'
import projects from '../data/projects'
import AquariumLogo from './aquarium-logo'

const aquarium = projects.find((project) => project.title === 'Аквариум')

const posts = [
    {
        name: 'Даниил Дыбка',
        time: '4 дня назад',
        avatar: '/img/contests/2025/baumanka/main.jpg',
        avatarPosition: '50% 32%',
        text: 'Поправили баблы в сообщениях в вебе, были некоторые проблемы с их отображением, сейчас стало лучше. А также активно исправляются звонки в мобильном приложении, больше всего проблем доставляет интеграция их с системными звонками Android и iOS. Хочется, чтобы мобильное приложение вышло удобным и без багов на старте. Посмотрим, что получится.',
        images: [],
        likes: 12,
        replies: 3,
    },
    {
        name: 'Максим Ефимцев',
        time: '4 дня назад',
        avatar: '/img/contests/2026/russian-engineer/cap.jpg',
        avatarPosition: '58% 30%',
        text: 'Рандом )',
        images: [
            '/img/contests/2025/rucode/main.jpg',
            '/img/contests/2025/pstgu/cap.jpg',
        ],
        likes: 4,
        replies: 1,
    },
    {
        name: 'Альтушка Нефор',
        time: '6 дней назад',
        avatar: '/img/contests/2025/rucode/main.jpg',
        avatarPosition: '78% 30%',
        text: 'Вчерашняя прогулка',
        images: ['/img/contests/2025/saintp/cap.jpg'],
        likes: 7,
        replies: 2,
    },
    {
        name: 'Лена Соколова',
        time: 'неделю назад',
        avatar: '/img/contests/2024/pstgu/cap.jpg',
        avatarPosition: '50% 30%',
        text: 'Кто-нибудь ещё помнит, как звучит тишина без уведомлений?',
        images: [],
        likes: 9,
        replies: 4,
    },
]

function Post({ post, postBackground, postColor, mutedColor }) {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '548px',
                p: '20px',
                borderRadius: '24px',
                bgcolor: postBackground,
                color: postColor,
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'start', gap: '8px' }}>
                <Box
                    component="img"
                    src={post.avatar}
                    alt=""
                    sx={{
                        width: '40px',
                        height: '40px',
                        flexShrink: 0,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        objectPosition: post.avatarPosition,
                    }}
                />
                <Box sx={{ minWidth: 0 }}>
                    <Box
                        component="div"
                        sx={{
                            fontFamily: 'var(--joy-fontFamily-body)',
                            fontSize: '16px',
                            fontWeight: 500,
                            lineHeight: 1.3,
                        }}
                    >
                        {post.name}
                    </Box>
                    <Box
                        component="div"
                        sx={{
                            color: mutedColor,
                            fontFamily: 'var(--joy-fontFamily-body)',
                            fontSize: '12px',
                            lineHeight: 1.3,
                        }}
                    >
                        {post.time}
                    </Box>
                </Box>
                <Box
                    component="span"
                    sx={{
                        display: 'inline-flex',
                        ml: 'auto',
                        color: mutedColor,
                        flexShrink: 0,
                    }}
                >
                    <DotsThreeVertical size={20} weight="bold" />
                </Box>
            </Box>

            <Box
                component="div"
                sx={{
                    mt: '14px',
                    fontFamily: 'var(--joy-fontFamily-body)',
                    fontSize: '16px',
                    lineHeight: 1.55,
                }}
            >
                {post.text}
            </Box>

            {post.images.length > 0 ? (
                <Box
                    component="div"
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '10px',
                        mt: '14px',
                    }}
                >
                    {post.images.map((src) => (
                        <Box
                            key={src}
                            component="img"
                            src={src}
                            alt=""
                            sx={{
                                display: 'block',
                                width: '120px',
                                height: '120px',
                                borderRadius: '12px',
                                objectFit: 'cover',
                            }}
                        />
                    ))}
                </Box>
            ) : null}

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '18px',
                    mt: '16px',
                    color: mutedColor,
                }}
            >
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <Heart size={18} weight="regular" />
                    <Box component="span" sx={{ fontSize: '12px' }}>
                        {post.likes}
                    </Box>
                </Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <ChatIcon size={18} weight="regular" />
                    <Box component="span" sx={{ fontSize: '12px' }}>
                        {post.replies}
                    </Box>
                </Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                    <ShareIcon size={18} weight="regular" />
                </Box>
            </Box>
        </Box>
    )
}

function FeedGroup({ posts: groupPosts, hidden, postBackground, postColor, mutedColor }) {
    return (
        <Box
            aria-hidden={hidden ? 'true' : undefined}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                pb: '12px',
                flexShrink: 0,
            }}
        >
            {groupPosts.map((post) => (
                <Post
                    key={post.name + post.time}
                    post={post}
                    postBackground={postBackground}
                    postColor={postColor}
                    mutedColor={mutedColor}
                />
            ))}
        </Box>
    )
}

function FeedColumn({ groupPosts, className, height, postBackground, postColor, mutedColor }) {
    return (
        <Box
            aria-hidden="true"
            sx={{
                width: '100%',
                height,
                overflow: 'hidden',
            }}
        >
            <Box className={`aquarium-feed ${className}`}>
                <FeedGroup
                    posts={groupPosts}
                    postBackground={postBackground}
                    postColor={postColor}
                    mutedColor={mutedColor}
                />
                <FeedGroup
                    posts={groupPosts}
                    hidden
                    postBackground={postBackground}
                    postColor={postColor}
                    mutedColor={mutedColor}
                />
            </Box>
        </Box>
    )
}

export default function Aquarium() {
    const { mode, systemMode } = useColorScheme()
    const twoColumns = useMediaQuery('(min-width: 1280px)')
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')

    const sectionBackground = '#f2f2f2'
    const textColor = '#000'
    const mutedText = 'rgba(0,0,0,.62)'
    const faintText = 'rgba(0,0,0,.45)'
    const postBackground = dark ? '#1a1a1a' : '#fff'
    const postColor = dark ? '#fff' : '#000'
    const postMuted = dark ? 'rgba(255,255,255,.42)' : 'rgba(0,0,0,.45)'

    const leftPosts = posts.filter((_, index) => index % 2 === 0)
    const rightPosts = posts.filter((_, index) => index % 2 === 1)
    const columns = twoColumns ? [leftPosts, rightPosts] : [posts]

    return (
        <Box
            component="section"
            id="aquarium"
            aria-labelledby="aquarium-title"
            sx={{
                position: 'relative',
                zIndex: 1,
                bgcolor: sectionBackground,
                color: textColor,
                px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
            }}
        >
            <Box sx={{ maxWidth: '1600px', mx: 'auto' }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'minmax(0, 0.78fr) minmax(0, 1.22fr)',
                        },
                        gap: { xs: '40px', md: 'clamp(48px, 7vw, 110px)' },
                        alignItems: 'center',
                    }}
                >
                    <Box>
                        <Box
                            component="h2"
                            id="aquarium-title"
                            aria-label="Аквариум"
                            sx={{
                                width: { xs: '220px', md: 'clamp(260px, 24vw, 300px)' },
                                m: 0,
                                color: textColor,
                                lineHeight: 0,
                            }}
                        >
                            <AquariumLogo
                                style={{
                                    display: 'block',
                                    width: '100%',
                                    height: 'auto',
                                }}
                            />
                        </Box>
                        <Box
                            component="div"
                            sx={{
                                mt: '24px',
                                maxWidth: '48ch',
                                color: mutedText,
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '16px',
                                lineHeight: 1.6,
                            }}
                        >
                            Мессенджер и микроблог для близких: личные и групповые чаты,
                            звонки, публикации и профиль. Веб-версия, приложения для iOS и
                            Android.
                        </Box>
                        <Box
                            component="div"
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px 18px',
                                mt: '28px',
                                color: faintText,
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '9px',
                                fontWeight: 500,
                                letterSpacing: '0.1em',
                                lineHeight: 1.5,
                                textTransform: 'uppercase',
                            }}
                        >
                            <span>iOS</span>
                            <span>Android</span>
                            <span>Веб</span>
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
                                href={aquarium.link}
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    pb: '5px',
                                    color: textColor,
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
                                Открыть Аквариум
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
                                href={`${aquarium.link}/welcome`}
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    pb: '5px',
                                    color: textColor,
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

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: twoColumns
                                ? 'repeat(2, minmax(0, 1fr))'
                                : '1fr',
                            gap: '12px',
                            width: '100%',
                            maxWidth: twoColumns ? '1108px' : '548px',
                            justifySelf: 'end',
                        }}
                    >
                        {columns.map((groupPosts, index) => (
                            <FeedColumn
                                key={index}
                                groupPosts={groupPosts}
                                className={index === 1 ? 'aquarium-feed--right' : ''}
                                height={{ xs: '560px', md: '640px' }}
                                postBackground={postBackground}
                                postColor={postColor}
                                mutedColor={postMuted}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
