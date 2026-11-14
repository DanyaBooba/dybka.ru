import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import { ArrowUpRight, ChatCircle, Fish, Heart } from '@phosphor-icons/react'
import projects from '../data/projects'

const aquarium = projects.find((project) => project.title === 'Аквариум')

const posts = [
    {
        name: 'Максим Ефимцев',
        time: '4 дня назад',
        text: 'Рандом )',
        images: [
            '/img/contests/2025/baumanka/main.jpg',
            '/img/contests/2025/rucode/main.jpg',
            '/img/contests/2025/pstgu/cap.jpg',
            '/img/contests/2024/icpc/cap.jpg',
        ],
        likes: 1,
        replies: 0,
    },
    {
        name: 'Даниил Дыбка',
        time: '4 дня назад',
        text: 'Поправили баблы в сообщениях в вебе, были некоторые проблемы с их отображением, сейчас стало лучше. А также активно исправляются звонки в мобильном приложении, больше всего проблем доставляет интеграция их с системными звонками Android и iOS. Хочется, чтобы мобильное приложение вышло удобным и без багов на старте. Посмотрим, что получится.',
        images: [],
        likes: 4,
        replies: 2,
    },
    {
        name: 'Альтушка Нефор',
        time: '6 дней назад',
        text: 'Вчерашняя прогулка',
        images: [
            '/img/contests/2025/saintp/cap.jpg',
            '/img/contests/2024/pstgu/cap.jpg',
        ],
        likes: 2,
        replies: 1,
    },
    {
        name: 'Лена Соколова',
        time: 'неделю назад',
        text: 'Кто-нибудь ещё помнит, как звучит тишина без уведомлений?',
        images: [],
        likes: 3,
        replies: 1,
    },
]

function FeedCard({ post }) {
    return (
        <Box
            sx={{
                px: '16px',
                py: '14px',
                borderBottom: '1px solid rgba(0,0,0,.08)',
                bgcolor: '#fff',
            }}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Box
                    sx={{
                        display: 'grid',
                        width: '28px',
                        height: '28px',
                        flexShrink: 0,
                        borderRadius: '50%',
                        bgcolor: '#111',
                        color: '#fff',
                        fontFamily: 'var(--joy-fontFamily-body)',
                        fontSize: '10px',
                        fontWeight: 500,
                        placeItems: 'center',
                    }}
                >
                    {post.name.charAt(0)}
                </Box>
                <Box>
                    <Typography
                        sx={{
                            color: '#000',
                            fontFamily: 'var(--joy-fontFamily-body)',
                            fontSize: '11px',
                            fontWeight: 500,
                            lineHeight: 1.3,
                        }}
                    >
                        {post.name}
                    </Typography>
                    <Typography
                        sx={{
                            color: 'rgba(0,0,0,.42)',
                            fontFamily: 'var(--joy-fontFamily-body)',
                            fontSize: '9px',
                            lineHeight: 1.3,
                        }}
                    >
                        {post.time}
                    </Typography>
                </Box>
            </Box>

            <Typography
                sx={{
                    mt: '10px',
                    color: 'rgba(0,0,0,.72)',
                    fontFamily: 'var(--joy-fontFamily-body)',
                    fontSize: '11px',
                    lineHeight: 1.5,
                }}
            >
                {post.text}
            </Typography>

            {post.images.length > 0 ? (
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns:
                            post.images.length === 1 ? '1fr' : 'repeat(2, minmax(0, 1fr))',
                        gap: '4px',
                        mt: '10px',
                    }}
                >
                    {post.images.map((src) => (
                        <Box
                            key={src}
                            component="img"
                            src={src}
                            alt=""
                            sx={{
                                width: '100%',
                                aspectRatio: '16 / 10',
                                objectFit: 'cover',
                                filter: 'grayscale(1)',
                            }}
                        />
                    ))}
                </Box>
            ) : null}

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    mt: '10px',
                    color: 'rgba(0,0,0,.42)',
                    fontFamily: 'var(--joy-fontFamily-body)',
                    fontSize: '9px',
                }}
            >
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Heart size={12} weight="regular" />
                    {post.likes}
                </Box>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <ChatCircle size={12} weight="regular" />
                    {post.replies}
                </Box>
            </Box>
        </Box>
    )
}

function FeedGroup({ hidden }) {
    return (
        <Box
            aria-hidden={hidden ? 'true' : undefined}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                flexShrink: 0,
                pb: '12px',
            }}
        >
            {posts.map((post) => (
                <FeedCard key={post.name + post.time} post={post} />
            ))}
        </Box>
    )
}

export default function Aquarium() {
    return (
        <Box
            component="section"
            id="aquarium"
            aria-labelledby="aquarium-title"
            sx={{
                position: 'relative',
                zIndex: 1,
                bgcolor: '#f2f2f2',
                color: '#000',
                px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                py: { xs: '72px', md: 'clamp(96px, 10vw, 140px)' },
            }}
        >
            <Box sx={{ maxWidth: '1600px', mx: 'auto' }}>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
                        },
                        gap: { xs: '40px', md: 'clamp(48px, 7vw, 110px)' },
                        alignItems: 'center',
                        pt: { xs: '40px', md: '56px' },
                    }}
                >
                    <Box>
                        <Typography
                            level="h2"
                            id="aquarium-title"
                            sx={{
                                color: '#000',
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(3rem, 5.4vw, 5.6rem)',
                                fontWeight: 400,
                                lineHeight: 0.92,
                                letterSpacing: '-0.04em',
                            }}
                        >
                            Аквариум
                        </Typography>
                        <Typography
                            sx={{
                                mt: '20px',
                                maxWidth: '48ch',
                                color: 'rgba(0,0,0,.62)',
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '13px',
                                lineHeight: 1.6,
                            }}
                        >
                            Мессенджер и микроблог для близких: личные и групповые чаты,
                            звонки, публикации и профиль. Веб-версия, приложения для iOS и
                            Android.
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '8px 18px',
                                mt: '28px',
                                color: 'rgba(0,0,0,.45)',
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
                                    color: '#000',
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
                                    color: '#000',
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
                                О проекте
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
                        </Box>
                    </Box>

                    <Box
                        aria-hidden="true"
                        sx={{
                            overflow: 'hidden',
                            bgcolor: '#fff',
                            border: '1px solid rgba(0,0,0,.14)',
                            height: { xs: '440px', md: '560px' },
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                height: '44px',
                                px: '16px',
                                borderBottom: '1px solid rgba(0,0,0,.1)',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    color: '#000',
                                    fontFamily: 'var(--joy-fontFamily-body)',
                                    fontSize: '11px',
                                    fontWeight: 500,
                                }}
                            >
                                <Fish size={16} weight="fill" />
                                Аквариум
                            </Box>
                            <Box
                                sx={{
                                    color: 'rgba(0,0,0,.42)',
                                    fontFamily: 'var(--joy-fontFamily-body)',
                                    fontSize: '9px',
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                }}
                            >
                                Лента
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                height: 'calc(100% - 44px)',
                                overflow: 'hidden',
                                maskImage:
                                    'linear-gradient(180deg, transparent 0%, #000 7%, #000 93%, transparent 100%)',
                                WebkitMaskImage:
                                    'linear-gradient(180deg, transparent 0%, #000 7%, #000 93%, transparent 100%)',
                            }}
                        >
                            <Box className="aquarium-feed">
                                <FeedGroup />
                                <FeedGroup hidden />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
