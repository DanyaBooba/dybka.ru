import Box from '@mui/joy/Box'
import { useTheme } from '@mui/joy/styles'

const links = [
    { label: 'Телеграм', href: 'https://ddybka.t.me/' },
    { label: 'Аквариум', href: 'https://aquarium.org.ru/show/ddybka' },
    { label: 'GitHub', href: 'https://github.com/DanyaBooba' },
]

export default function Contacts() {
    const theme = useTheme()
    const palette = theme.vars.palette

    return (
        <Box
            component="section"
            id="contacts"
            aria-labelledby="contacts-title"
            sx={{
                position: 'relative',
                zIndex: 1,
                px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                py: 'clamp(80px, 12vw, 160px)',
            }}
        >
            <Box
                sx={{
                    maxWidth: '1200px',
                    mx: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >

                <Box
                    component="a"
                    href="mailto:daniil@dybka.ru"
                    sx={{
                        display: 'inline-block',
                        maxWidth: '100%',
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(30px, 6.4vw, 88px)',
                        fontWeight: 400,
                        lineHeight: 0.95,
                        letterSpacing: '-0.04em',
                        color: palette.text.primary,
                        textDecoration: 'none',
                        transition: 'opacity .25s ease',
                        '&:hover': { opacity: 0.55 },
                    }}
                >
                    daniil@dybka.ru
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'flex-start',
                        gap: 'clamp(16px, 2.5vw, 32px)',
                        mt: 'clamp(28px, 4vw, 48px)',
                    }}
                >
                    {links.map((link) => (
                        <Box
                            component="a"
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            sx={{
                                fontFamily: 'var(--joy-fontFamily-body)',
                                fontSize: '10px',
                                fontWeight: 500,
                                letterSpacing: '0.1em',
                                textTransform: 'uppercase',
                                textDecoration: 'none',
                                color: palette.text.secondary,
                                transition: 'opacity .25s ease',
                                '&:hover': { opacity: 0.55 },
                            }}
                        >
                            {link.label}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    )
}
