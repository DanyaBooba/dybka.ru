import Box from '@mui/joy/Box'
import { Link, useLocation } from 'react-router-dom'

const links = [
    { label: 'Проекты', href: '/projects' },
    { label: 'Мероприятия', href: '/events' },
    { label: 'СМИ', href: '/smi' },
    { label: 'Обо мне', href: '/about' },
]

export default function Header() {
    const { pathname } = useLocation()
    const items = pathname === '/'
        ? links
        : [{ label: 'Главная', href: '/' }, ...links]

    return (
        <Box
            component="header"
            sx={{
                position: 'fixed',
                top: { xs: 'auto', md: 0 },
                bottom: { xs: 0, md: 'auto' },
                left: 0,
                right: 0,
                zIndex: 20,
                display: 'flex',
                justifyContent: 'center',
                pt: { xs: 0, md: 'calc(12px + env(safe-area-inset-top, 0px))' },
                pb: { xs: 'calc(8px + env(safe-area-inset-bottom, 0px))', md: 0 },
                pointerEvents: 'none',
                mixBlendMode: 'difference',
            }}
        >
            <Box
                component="nav"
                aria-label="Основная навигация"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: '4px', md: '12px' },
                    pointerEvents: 'auto',
                    color: '#fff',
                    fontSize: { xs: '11px', md: '14px' },
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                }}
            >
                {items.map((link) => {
                    const active = pathname === link.href
                        || (link.href !== '/' && pathname.startsWith(`${link.href}/`))
                    const linkSx = {
                        color: 'inherit',
                        textDecoration: 'none',
                        px: { xs: '6px', md: 2 },
                        py: 1,
                    }

                    if (active) {
                        return (
                            <Box
                                key={link.href}
                                component={Link}
                                to={link.href}
                                onClick={() => window.scrollTo(0, 0)}
                                aria-current="page"
                                sx={{
                                    ...linkSx,
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '4px',
                                }}
                            >
                                {link.label}
                            </Box>
                        )
                    }

                    return (
                        <Box
                            key={link.href}
                            component={Link}
                            to={link.href}
                            onClick={() => window.scrollTo(0, 0)}
                            sx={linkSx}
                        >
                            {link.label}
                        </Box>
                    )
                })}
            </Box>
        </Box>
    )
}
