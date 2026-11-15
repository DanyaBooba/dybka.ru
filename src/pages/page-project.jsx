import { useEffect } from 'react'
import Box from '@mui/joy/Box'
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

export default function PageProject() {
    const { slug } = useParams()
    const project = projects.find((item) => item.slug === slug)
    const projectImage = project?.img
        ? `/img/projects/${project.img}@light.jpg`
        : DEFAULT_IMAGE
    const projectDescription = project?.desc ?? 'Страница проекта Даниила Дыбка.'

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Seo
                title={project ? `${project.title} — проект Даниила Дыбка` : 'Проект не найден — Даниил Дыбка'}
                description={projectDescription}
                keywords={project
                    ? `${project.title}, ${project.stack?.join(', ') ?? ''}, проект, портфолио, Даниил Дыбка`
                    : 'проект, портфолио, Даниил Дыбка'}
                path={project ? `/projects/${project.slug}` : '/projects'}
                image={projectImage}
                imageAlt={project?.title ?? 'Проект Даниила Дыбка'}
                type="article"
                noindex={!project}
                jsonLd={project ? {
                    '@type': 'CreativeWork',
                    name: project.title,
                    description: project.desc,
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
            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    minHeight: '100svh',
                }}
            />
        </>
    )
}
