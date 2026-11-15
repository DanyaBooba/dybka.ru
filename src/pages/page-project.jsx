import { useEffect } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme, useTheme } from '@mui/joy/styles'
import { useParams } from 'react-router-dom'
import Header from '../components/header'
import Seo from '../components/seo'
import projects from '../data/projects'
import {
    DEFAULT_IMAGE,
    PERSON_ID,
    SITE_URL,
    WEBSITE_ID,
} from '../data/seo'
import PamyatAppProjectPage from './projects/pamyat-app'
import { ArrowUpRight } from '@phosphor-icons/react'

const customProjectPages = {
    'pamyat-app': PamyatAppProjectPage,
}

const categoryLabels = {
    web: 'Веб',
    app: 'Приложение',
    bot: 'Бот',
    other: 'Проект',
}

const linkSx = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    color: 'inherit',
    fontFamily: 'var(--joy-fontFamily-body)',
    fontSize: '10px',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'opacity .25s ease',
    '&:hover': { opacity: 0.55 },
}

export default function PageProject() {
    const theme = useTheme()
    const palette = theme.vars.palette
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const { slug } = useParams()
    const project = projects.find((item) => item.slug === slug)
    const projectTitle = project?.page?.title ?? project?.title
    const projectDescription = project?.page?.desc
        ?? project?.page?.description
        ?? project?.desc
        ?? 'Страница проекта Даниила Дыбка.'
    const projectLabel = project
        ? [
            categoryLabels[project.categories?.[0]],
            ...(project.stack ?? []).slice(0, 2),
        ].filter(Boolean).join(' · ') || 'Проект'
        : 'Проект'
    const pageContent = project?.page?.content ?? []
    const projectImage = project?.img
        ? `/img/projects/${project.img}@light.jpg`
        : DEFAULT_IMAGE
    const displayImage = project?.img
        ? `/img/projects/${project.img}@${dark ? 'dark' : 'light'}.jpg`
        : null
    const CustomPage = project?.customPage
        ? customProjectPages[project.customPage]
        : null

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Seo
                title={project ? `${projectTitle} — проект Даниила Дыбка` : 'Проект не найден — Даниил Дыбка'}
                description={projectDescription}
                keywords={project
                    ? `${projectTitle}, ${project.stack?.join(', ') ?? ''}, проект, портфолио, Даниил Дыбка`
                    : 'проект, портфолио, Даниил Дыбка'}
                path={project ? `/projects/${project.slug}` : '/projects'}
                image={projectImage}
                imageAlt={projectTitle ?? 'Проект Даниила Дыбка'}
                type="article"
                noindex={!project}
                jsonLd={project ? {
                    '@type': 'CreativeWork',
                    name: projectTitle,
                    description: projectDescription,
                    url: `${SITE_URL}/projects/${project.slug}`,
                    image: `${SITE_URL}${projectImage}`,
                    author: { '@id': PERSON_ID },
                    keywords: project.stack?.join(', '),
                    inLanguage: 'ru-RU',
                    sameAs: project.link,
                    isPartOf: { '@id': WEBSITE_ID },
                } : undefined}
            />
            <Header />

            {CustomPage ? (
                <CustomPage project={project} image={displayImage} />
            ) : (
                <Box
                    component="main"
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                        pt: 'clamp(120px, 16vw, 200px)',
                        pb: 'clamp(80px, 12vw, 160px)',
                    }}
                >
                    <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '10px',
                                fontWeight: 500,
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: palette.text.tertiary,
                            }}
                        >
                            {projectLabel}
                        </Box>

                        <Box
                            component="h1"
                            sx={{
                                m: 0,
                                mt: 'clamp(16px, 2vw, 24px)',
                                maxWidth: '20ch',
                                fontFamily: 'var(--joy-fontFamily-display)',
                                fontSize: 'clamp(2.1rem, 4vw, 3.6rem)',
                                fontWeight: 400,
                                lineHeight: 0.95,
                                letterSpacing: '-0.04em',
                                color: palette.about.titleColor,
                            }}
                        >
                            {projectTitle ?? 'Проект не найден'}
                        </Box>

                        <Box
                            component="p"
                            sx={{
                                m: 0,
                                mt: 'clamp(16px, 2vw, 24px)',
                                maxWidth: '60ch',
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: 'clamp(16px, 1.25vw, 18px)',
                                lineHeight: 1.6,
                                color: palette.text.secondary,
                            }}
                        >
                            {projectDescription}
                        </Box>

                        {(project.link || project.github) && (
                            <Box sx={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                gap: '12px 28px',
                                mt: { xs: '32px', md: '48px' },
                                mb: { xs: 'clamp(48px, 12vw, 72px)', md: '100px' },
                            }}>
                                {project.link && (
                                    <Box
                                        component="a"
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={{
                                            ...linkSx,
                                            '&:hover .pamyat-arrow': {
                                                transform: 'translate(4px, -4px)',
                                            },
                                        }}
                                    >
                                        Открыть проект
                                        <ArrowUpRight
                                            className="pamyat-arrow"
                                            size={16}
                                            weight="light"
                                            aria-hidden="true"
                                            style={{
                                                transition: 'transform .5s cubic-bezier(0.22, 1, 0.36, 1)',
                                            }}
                                        />
                                    </Box>
                                )}
                                {project.github && (
                                    <Box
                                        component="a"
                                        href={`https://github.com/DanyaBooba/${project.github}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        sx={linkSx}
                                    >
                                        Страница на GitHub
                                    </Box>
                                )}
                            </Box>
                        )}

                        {displayImage ? (
                            <Box
                                sx={{
                                    mt: 'clamp(32px, 4vw, 56px)',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    bgcolor: '#1b1b1b',
                                }}
                            >
                                <Box
                                    component="img"
                                    src={displayImage}
                                    alt={projectTitle}
                                    loading="eager"
                                    decoding="async"
                                    sx={{
                                        display: 'block',
                                        width: '100%',
                                        height: 'auto',
                                    }}
                                />
                            </Box>
                        ) : null}

                        {pageContent.length ? (
                            <Box
                                sx={{
                                    mt: 'clamp(32px, 4vw, 56px)',
                                    maxWidth: '1000px',
                                    display: 'grid',
                                    gridTemplateColumns: {
                                        xs: '1fr',
                                        md: 'repeat(2, minmax(0, 1fr))',
                                    },
                                    gap: 'clamp(24px, 4vw, 64px)',
                                    mx: 'auto'
                                }}
                            >
                                {pageContent.map((block, index) => {
                                    const text = typeof block === 'string'
                                        ? block
                                        : block?.block === 'p'
                                            ? block.content
                                            : null

                                    if (!text) return null

                                    return (
                                        <Box
                                            component="p"
                                            key={index}
                                            sx={{
                                                m: 0,
                                                fontFamily: 'var(--joy-fontFamily-body)',
                                                fontSize: 'clamp(15px, 1.15vw, 17px)',
                                                lineHeight: 1.7,
                                                color: palette.text.secondary,
                                            }}
                                        >
                                            {text}
                                        </Box>
                                    )
                                })}
                            </Box>
                        ) : null}
                    </Box>
                </Box>
            )}
        </>
    )
}
