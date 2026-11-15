import { useEffect } from 'react'
import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'
import Header from '../components/header'
import Seo from '../components/seo'
import smi from '../data/smi'
import { SITE_URL, WEBSITE_ID } from '../data/seo'

export default function PageSmi() {
    const theme = useTheme()
    const palette = theme.vars.palette

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Seo
                title="СМИ — Даниил Дыбка"
                description="Публикации, интервью и упоминания проектов Даниила Дыбки в СМИ."
                keywords="СМИ, публикации, интервью, Даниил Дыбка, проекты"
                path="/smi"
                jsonLd={[
                    {
                        '@type': 'CollectionPage',
                        name: 'СМИ',
                        description: 'Публикации, интервью и упоминания проектов Даниила Дыбки в СМИ.',
                        url: `${SITE_URL}/smi`,
                        inLanguage: 'ru-RU',
                        isPartOf: { '@id': WEBSITE_ID },
                    },
                    {
                        '@type': 'ItemList',
                        name: 'СМИ',
                        itemListElement: smi.map((item, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            url: item.link,
                            name: item.title,
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
                        СМИ
                    </Box>
                </Box>

                <Box
                    component="ul"
                    sx={{
                        maxWidth: '1200px',
                        mx: 'auto',
                        listStyle: 'none',
                        my: 0,
                        p: 0,
                        pb: 'clamp(80px, 12vw, 160px)',
                    }}
                >
                    {smi.map((item, index) => {
                        const hasLink = Boolean(item.link)

                        return (
                            <Box
                                component="li"
                                key={item.link ?? `${item.title}-${index}`}
                                sx={{
                                    borderBottom: '1px solid',
                                    borderColor: palette.divider,
                                }}
                            >
                                <Box
                                    component={hasLink ? 'a' : 'div'}
                                    {...(hasLink ? {
                                        href: item.link,
                                        target: '_blank',
                                        rel: 'noreferrer',
                                    } : {})}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        justifyContent: 'space-between',
                                        flexWrap: 'wrap',
                                        gap: '8px 24px',
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
                                    <Box component="span">{item.title}</Box>
                                    {item.date ? (
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
                                            {item.date}
                                        </Box>
                                    ) : null}
                                </Box>
                            </Box>
                        )
                    })}
                </Box>
            </Box>
        </>
    )
}
