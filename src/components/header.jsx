import Box from '@mui/joy/Box'

const links = [
    { label: 'Проекты', href: '/projects' },
    { label: 'Мероприятия', href: '/events' },
    { label: 'СМИ', href: '/smi' },
    { label: 'Обо мне', href: '/about' },
]

export default function Header() {
    return (
        <Box
            component="header"
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 20,
                display: 'flex',
                justifyContent: 'center',
                pt: '12px',
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
                    gap: '12px',
                    pointerEvents: 'auto',
                    color: '#fff',
                    fontSize: { xs: '10.5px', md: '11px' },
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                }}
            >
                {links.map((link) => (
                    <Box
                        key={link.href}
                        component="a"
                        href={link.href}
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            px: 2,
                            py: 1
                        }}
                    >
                        {link.label}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
