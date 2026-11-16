import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ArrowUpRight } from '@phosphor-icons/react'
import posts from '../data/aquarium-posts'
import projects from '../data/projects'
import { FeedGroup } from './aquarium-post'
import AquariumLogo from './aquarium-logo'

const aquarium = projects.find((project) => project.slug === 'aquarium')

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
                            xs: 'minmax(0, 1fr)',
                            md: 'minmax(0, 0.78fr) minmax(0, 1.22fr)',
                        },
                        gap: { xs: '40px', md: 'clamp(48px, 7vw, 110px)' },
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ py: 8, minWidth: 0 }}>
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
                                color: palette.mutedText,
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
