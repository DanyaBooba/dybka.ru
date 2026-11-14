import { useEffect } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme, useTheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import Header from '../components/header'
import projects from '../data/projects'

const categories = [
    { key: 'web', label: 'Веб' },
    { key: 'app', label: 'Приложения' },
    { key: 'bot', label: 'Боты' },
    { key: 'other', label: 'Прочее' },
]

function ProjectCard({ project, image, outlineColor }) {
    return (
        <Box
            component={Link}
            to={`/projects/${project.slug}`}
            aria-label={project.title}
            sx={{
                position: 'relative',
                display: 'block',
                aspectRatio: '16 / 9',
                borderRadius: '16px',
                overflow: 'hidden',
                textDecoration: 'none',
                color: '#fff',
                bgcolor: '#1b1b1b',
                backgroundImage: image
                    ? undefined
                    : 'linear-gradient(135deg, #181818 0%, #303030 100%)',
                '&:hover .project-card-image': {
                    transform: 'scale(1.04)',
                },
                '&:hover .project-card-overlay': {
                    opacity: 0.82,
                },
                '&:hover .project-card-title': {
                    transform: 'translateY(-2px)',
                },
                '&:focus-visible': {
                    outline: '2px solid',
                    outlineColor,
                    outlineOffset: '4px',
                },
            }}
        >
            {image ? (
                <Box
                    component="img"
                    className="project-card-image"
                    src={image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform .7s cubic-bezier(0.22, 1, 0.36, 1)',
                    }}
                />
            ) : null}

            <Box
                className="project-card-overlay"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(180deg, rgba(0,0,0,0) 32%, rgba(0,0,0,.72) 100%)',
                    transition: 'opacity .4s ease',
                }}
            />

            <Box
                component="h2"
                className="project-card-title"
                sx={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 1,
                    m: 0,
                    p: 'clamp(18px, 2.2vw, 30px)',
                    fontFamily: 'var(--joy-fontFamily-display)',
                    fontSize: 'clamp(20px, 2.2vw, 30px)',
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                    color: '#fff',
                    transition: 'transform .4s ease',
                }}
            >
                {project.title}
            </Box>
        </Box>
    )
}

export default function PageProjects() {
    const theme = useTheme()
    const palette = theme.vars.palette
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                }}
            >
                <Box
                    sx={{
                        maxWidth: '1200px',
                        mx: 'auto',
                        pt: 'clamp(120px, 16vw, 200px)',
                        pb: 'clamp(64px, 10vw, 120px)',
                        textAlign: 'center',
                    }}
                >
                    <Box
                        component="h1"
                        sx={{
                            m: 0,
                            fontFamily: 'var(--joy-fontFamily-display)',
                            fontSize: 'clamp(2.1rem, 4vw, 3.6rem)',
                            fontWeight: 400,
                            lineHeight: 0.95,
                            letterSpacing: '-0.04em',
                            color: palette.about.titleColor,
                        }}
                    >
                        Проекты
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 'clamp(18px, 3.5vw, 48px)',
                            mt: 'clamp(32px, 4vw, 48px)',
                            fontFamily: 'var(--joy-fontFamily-body)',
                            fontSize: '10px',
                            fontWeight: 500,
                            letterSpacing: '0.12em',
                            textTransform: 'uppercase',
                            color: palette.text.tertiary,
                        }}
                    >
                        {categories.map((category) => (
                            <Box component="span" key={category.key}>
                                {category.label} ({projects.filter((project) => project.category === category.key).length})
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box
                    sx={{
                        maxWidth: '1200px',
                        mx: 'auto',
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            md: 'repeat(2, minmax(0, 1fr))',
                        },
                        gap: { xs: '16px', md: '24px' },
                        pb: 'clamp(64px, 10vw, 120px)',
                    }}
                >
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            image={project.img
                                ? `/img/projects/${project.img}@${dark ? 'dark' : 'light'}.jpg`
                                : null}
                            outlineColor={palette.text.primary}
                        />
                    ))}
                </Box>
            </Box>
        </>
    )
}
