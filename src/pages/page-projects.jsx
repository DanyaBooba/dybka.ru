import { useEffect } from 'react'
import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'
import Header from '../components/header'
import projects from '../data/projects'

const categories = [
    { key: 'web', label: 'Веб' },
    { key: 'app', label: 'Приложения' },
    { key: 'other', label: 'Прочее' },
]

export default function PageProjects() {
    const theme = useTheme()
    const palette = theme.vars.palette

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
            </Box>
        </>
    )
}
