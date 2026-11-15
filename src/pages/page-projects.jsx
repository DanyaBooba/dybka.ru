import { useEffect, useState } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme, useTheme } from '@mui/joy/styles'
import { Link } from 'react-router-dom'
import { Eye, EyeClosed } from '@phosphor-icons/react'
import Header from '../components/header'
import Seo from '../components/seo'
import projects, { games, archived } from '../data/projects'
import { SITE_URL, WEBSITE_ID } from '../data/seo'

const PROJECTS_DESCRIPTION = 'Проекты Даниила Дыбка: веб-платформы, приложения, боты, игры и архив. React, TypeScript, Laravel, Unity и другие технологии.'

const filters = [
    { key: 'all', label: 'Все' },
    { key: 'web', label: 'Веб' },
    { key: 'app', label: 'Приложения' },
    { key: 'bot', label: 'Боты' },
    { key: 'other', label: 'Прочее' },
    { key: 'games', label: 'Игры', special: true },
    { key: 'archive', label: 'Архив', special: true },
]


function ProjectCard({ project, image, outlineColor, titleColor, href }) {
    return (
        <Box
            component={href ? 'a' : Link}
            {...(href ? { href } : { to: `/projects/${project.slug}` })}
            aria-label={project.title}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                textDecoration: 'none',
                color: 'inherit',
                mb: 2,
                '&:hover .project-card-image': {
                    transform: 'scale(1.04)',
                    filter: 'grayscale(0)',
                },
                '&:focus-visible': {
                    outline: '2px solid',
                    outlineColor,
                    outlineOffset: '4px',
                    filter: 'grayscale(0)',
                },
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    aspectRatio: '16 / 9',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    bgcolor: '#1b1b1b',
                    backgroundImage: image
                        ? undefined
                        : 'linear-gradient(135deg, #181818 0%, #303030 100%)',
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
                        onError={(event) => { event.currentTarget.style.opacity = '0' }}
                        sx={{
                            position: 'absolute',
                            inset: 0,
                            display: 'block',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'grayscale(.3)',
                            transition: 'transform .3s cubic-bezier(0.22, 1, 0.36, 1)',
                        }}
                    />
                ) : null}
            </Box>

            <Box
                component="h2"
                className="project-card-title"
                sx={{
                    m: 0,
                    mt: 'clamp(10px, 1vw, 14px)',
                    fontFamily: 'var(--joy-fontFamily-body)',
                    fontSize: 'clamp(24px, 2.2vw, 24px)',
                    fontWeight: 500,
                    lineHeight: 1.08,
                    letterSpacing: '-0.02em',
                    color: titleColor,
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
    const [filter, setFilter] = useState('all')

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const countFor = (key) => {
        if (key === 'all') return projects.length
        if (key === 'games') return games.length
        if (key === 'archive') return archived.length
        return projects.filter((project) => project.categories.includes(key)).length
    }
    const visibleProjects = filter === 'all'
        ? projects
        : projects.filter((project) => project.categories.includes(filter))
    const pageTitle = filter === 'games'
        ? 'Игры'
        : filter === 'archive'
            ? 'Архив'
            : 'Проекты'

    return (
        <>
            <Seo
                title="Проекты — Даниил Дыбка"
                description={PROJECTS_DESCRIPTION}
                keywords="проекты Даниила Дыбка, портфолио, веб-разработка, React, TypeScript, приложения, боты, игры, архив"
                path="/projects"
                jsonLd={[
                    {
                        '@type': 'CollectionPage',
                        name: 'Проекты',
                        description: PROJECTS_DESCRIPTION,
                        url: `${SITE_URL}/projects`,
                        inLanguage: 'ru-RU',
                        isPartOf: { '@id': WEBSITE_ID },
                    },
                    {
                        '@type': 'ItemList',
                        name: 'Проекты',
                        itemListElement: projects.map((project, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            url: `${SITE_URL}/projects/${project.slug}`,
                            name: project.title,
                        })),
                    },
                ]}
            />
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
                        {pageTitle}
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
                        }}
                    >
                        {filters.map((item) => {
                            const active = filter === item.key

                            return (
                                <Box
                                    component="button"
                                    type="button"
                                    key={item.key}
                                    onClick={() => setFilter(item.key)}
                                    aria-pressed={active}
                                    sx={{
                                        appearance: 'none',
                                        m: 0,
                                        p: 0,
                                        border: 0,
                                        background: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '7px',
                                        font: 'inherit',
                                        letterSpacing: 'inherit',
                                        textTransform: 'inherit',
                                        color: active
                                            ? palette.about.titleColor
                                            : palette.text.tertiary,
                                        opacity: active ? 1 : 0.45,
                                        cursor: active ? 'default' : 'pointer',
                                        transition: 'opacity .2s ease, color .2s ease',
                                        '&:hover': {
                                            opacity: active ? 1 : 0.72,
                                        },
                                        '&:focus-visible': {
                                            outline: '1px solid',
                                            outlineColor: palette.text.primary,
                                            outlineOffset: '4px',
                                        },
                                    }}
                                >
                                    {item.special ? (
                                        active
                                            ? <Eye size={14} weight="regular" aria-hidden="true" style={{ flexShrink: 0 }} />
                                            : <EyeClosed size={14} weight="regular" aria-hidden="true" style={{ flexShrink: 0 }} />
                                    ) : null}
                                    {item.label} ({countFor(item.key)})
                                </Box>
                            )
                        })}
                    </Box>
                </Box>

                {filter === 'archive' ? (
                    <Box
                        component="ul"
                        sx={{
                            maxWidth: '1200px',
                            mx: 'auto',
                            listStyle: 'none',
                            my: 0,
                            p: 0,
                            pb: 'clamp(64px, 10vw, 120px)',
                        }}
                    >
                        {archived.map((project) => {
                            const hasLink = Boolean(project.link)

                            return (
                                <Box
                                    component="li"
                                    key={project.title}
                                    sx={{
                                        borderBottom: '1px solid',
                                        borderColor: palette.divider,
                                    }}
                                >
                                    <Box
                                        component={hasLink ? 'a' : 'div'}
                                        {...(hasLink ? {
                                            href: project.link,
                                            target: '_blank',
                                            rel: 'noreferrer',
                                        } : {})}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'baseline',
                                            justifyContent: 'space-between',
                                            flexWrap: 'wrap',
                                            gap: '12px 24px',
                                            py: 'clamp(18px, 2.4vw, 28px)',
                                            color: palette.about.titleColor,
                                            textDecoration: 'none',
                                            fontFamily: 'var(--joy-fontFamily-body)',
                                            fontSize: 'clamp(18px, 1.8vw, 24px)',
                                            fontWeight: 500,
                                            letterSpacing: '-0.02em',
                                            cursor: hasLink ? 'pointer' : 'default',
                                            transition: 'opacity .2s ease',
                                            ...(hasLink ? { '&:hover': { opacity: 0.55 } } : {}),
                                        }}
                                    >
                                        <Box component="span">
                                            {project.title}
                                        </Box>
                                        {project.stack?.length ? (
                                            <Box
                                                component="span"
                                                sx={{
                                                    ml: 'auto',
                                                    fontSize: '10px',
                                                    fontWeight: 500,
                                                    letterSpacing: '0.12em',
                                                    textTransform: 'uppercase',
                                                    textAlign: 'right',
                                                    color: palette.text.tertiary,
                                                }}
                                            >
                                                {project.stack.join(' · ')}
                                            </Box>
                                        ) : null}
                                    </Box>
                                </Box>
                            )
                        })}
                    </Box>
                ) : (
                    <Box
                        sx={{
                            maxWidth: '1200px',
                            mx: 'auto',
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                md: 'repeat(2, minmax(0, 1fr))',
                            },
                            gap: { xs: '16px', md: '16px' },
                            alignItems: 'start',
                            pb: 'clamp(64px, 10vw, 120px)',
                        }}
                    >
                        {(filter === 'games' ? games : visibleProjects).map((project) => (
                            <ProjectCard
                                key={project.slug ?? project.link}
                                project={project}
                                image={filter === 'games'
                                    ? (project.img ? `/img/games/${project.img}.jpg` : undefined)
                                    : project.img
                                        ? `/img/projects/${project.img}@${dark ? 'dark' : 'light'}.jpg`
                                        : undefined}
                                href={filter === 'games' ? project.link : undefined}
                                outlineColor={palette.text.primary}
                                titleColor={palette.about.titleColor}
                            />
                        ))}
                    </Box>
                )}
            </Box>
        </>
    )
}
