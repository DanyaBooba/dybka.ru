import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
    ArrowUpRight,
    ChatIcon,
    DotsThreeVertical,
    Heart,
    SealCheckIcon,
    ShareIcon,
} from '@phosphor-icons/react'
import projects from '../data/projects'
import AquariumLogo from './aquarium-logo'

const aquarium = projects.find((project) => project.slug === 'aquarium')

const posts = [
    {
        name: 'Даниил Дыбка',
        verified: true,
        time: '4 дня назад',
        avatar: '/img/aquarium/user-daniil.jpg',
        text: '🐟 Приложение Аквариума доступно в App Store!<br/>Скорей скачивайте по поиску:<br/>Аквариум мессенджер<br/>🤩 <i>Работает с iOS и iPadOS 15.1+</i>',
        images: [],
        likes: 12,
        replies: 3,
    },
    {
        name: 'Максим Ефимцев',
        time: '4 дня назад',
        avatar: '/img/aquarium/user-maxim.jpg',
        text: 'Август балует видами',
        images: [
            '/img/aquarium/post-maxim-1.jpg'
        ],
        likes: 4,
        replies: 1,
    },
    {
        name: 'Александр Семченко',
        verified: true,
        time: '6 дней назад',
        avatar: '/img/aquarium/user-sasha.jpg',
        text: 'природа конечно шикарна, но небо еще лучше ',
        images: [
            '/img/aquarium/post-sasha-1.jpg',
            '/img/aquarium/post-sasha-2.jpg',
            '/img/aquarium/post-sasha-3.jpg'
        ],
        likes: 7,
        replies: 2,
    },
    {
        name: 'Fentazzi',
        time: 'неделю назад',
        avatar: '/img/aquarium/user-fentazzi.jpg',
        text: 'Короче, разрабы крутые, все четко, веб сайт и приложение кайфовые',
        images: [],
        likes: 9,
        replies: 4,
    },
    {
        name: 'Repi',
        time: '7 часов назад',
        avatar: '/img/aquarium/user-rapi.jpg',
        text: 'Люблю аквариум. Если честно аквариум лучший современный мессенджер по дизайну и функционалу который я использовал. Я использовал миллион разных мессенджеров и скажу что этот самый лучший',
        images: [],
        likes: 32,
        replies: 17,
    },
    {
        name: 'точно не темочка',
        verified: true,
        time: '12 дней назад',
        avatar: '/img/aquarium/user-tema.jpg',
        text: 'Поздравляю школьников и студентов с началом учебного года. Желаю отлично провести это время',
        images: [],
        likes: 8,
        replies: 3,
    },
    {
        name: 'Дмитрий Геймдев',
        time: '3 дня назад',
        avatar: '/img/aquarium/user-dima.jpg',
        text: 'Пока особо новостей нет. Выполняю первый заказ + начал делать клон игры со стима, да бы на нем заработать на ноутбук)',
        images: [],
        likes: 17,
        replies: 13,
    },
]

function Post({ post, palette }) {
    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '548px',
                p: '20px',
                borderRadius: '24px',
                bgcolor: palette.postBackground,
                color: palette.text,
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
                    }}
                />
                <Box sx={{ minWidth: 0 }}>
                    <Box
                        component="div"
                        sx={{
                            fontFamily: "'Inter', Georgia, serif",
                            fontSize: '16px',
                            fontWeight: 600,
                            lineHeight: 1.3,
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '4px',
                        }}
                    >
                        <div>
                            {post.name}
                        </div>
                        {post?.verified && (
                            <Box sx={{
                                width: '15px',
                                height: '15px',
                                '& svg': {
                                    fill: palette.verifiedColor,
                                    width: '15px',
                                    height: '15px'
                                }
                            }}>
                                <SealCheckIcon weight="fill" />
                            </Box>
                        )}
                    </Box>
                    <Box
                        component="div"
                        sx={{
                            color: palette.postMutedText,
                            fontFamily: "'Inter', Georgia, serif",
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
                        color: palette.postMutedText,
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
                    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontSize: '16px',
                    lineHeight: 1.55,
                }}
            >
                <div dangerouslySetInnerHTML={{ __html: post.text }} />
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
                    color: palette.postMutedText,
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

function FeedGroup({ posts: groupPosts, hidden, palette }) {
    return (
        <Box
            aria-hidden={hidden ? 'true' : undefined}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                flexShrink: 0,
            }}
        >
            {groupPosts.map((post) => (
                <Post
                    key={post.name + post.time}
                    post={post}
                    palette={palette}
                />
            ))}
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
                overflow: 'hidden',
            }}
        >
            <Box className={`aquarium-feed ${className}`}>
                <FeedGroup
                    posts={groupPosts}
                    palette={palette}
                />
                <FeedGroup
                    posts={groupPosts}
                    hidden
                    palette={palette}
                />
            </Box>
        </Box>
    )
}

export default function Aquarium() {
    const theme = useTheme()
    const palette = theme.vars.palette.aquarium
    const twoColumns = useMediaQuery('(min-width: 1280px)')

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
                bgcolor: palette.background,
                color: palette.text,
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
                    <Box sx={{ py: 8 }}>
                        <Box
                            component="h2"
                            id="aquarium-title"
                            aria-label="Аквариум"
                            sx={{
                                width: { xs: '220px', md: 'clamp(260px, 24vw, 300px)' },
                                m: 0,
                                color: palette.text,
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
                                color: palette.mutedText,
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
                                color: palette.faintText,
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
                                    color: palette.text,
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
                                href={`/projects/aquarium`}
                                target="_blank"
                                rel="noreferrer"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: palette.text,
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
                            display: { md: 'grid', xs: 'none' },
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
                                palette={palette}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
