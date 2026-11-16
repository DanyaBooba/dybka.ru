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
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    columnGap: { xs: '10px', md: '12px' },
                    rowGap: 0,
                    maxWidth: '100%',
                    pointerEvents: 'auto',
                    color: '#fff',
                    fontSize: { xs: '16px', md: '18px' },
                    fontWeight: 500,
                    lineHeight: 1.5,
                    whiteSpace: 'nowrap',
                    ...(items.length > 4
                        ? {
                            '@media (max-width: 389px)': {
                                maxWidth: '285px',
                                columnGap: '16px',
                            },
                        }
                        : {}),
                }}
            >
                {items.map((link) => {
                    const active = pathname === link.href
                        || (link.href !== '/' && pathname.startsWith(`${link.href}/`))
                    const linkSx = {
                        color: 'inherit',
                        textDecoration: 'none',
                        px: { xs: 0, md: 2 },
                        py: { xs: 0.5, md: 1 },
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
