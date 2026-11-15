import Box from '@mui/joy/Box'
import Typography from '@mui/joy/Typography'
import { useTheme } from '@mui/joy/styles'

export default function Quote() {
    const theme = useTheme()
    const palette = theme.vars.palette.quote

    return (
        <Box
            component="section"
            aria-label="Цитата Стива Джобса"
            sx={{
                position: 'relative',
                zIndex: 1,
                color: palette.text,
                px: { xs: '20px', md: 'clamp(24px, 3.2vw, 48px)' },
                py: { xs: '64px', md: '110px' },
            }}
        >
            <Box
                sx={{
                    maxWidth: '1040px',
                    mx: 'auto',
                    textAlign: 'end',
                }}
            >
                <Typography
                    component="blockquote"
                    sx={{
                        m: 0,
                        maxWidth: '34ch',
                        ml: 'auto',
                        color: palette.text,
                        fontFamily: 'var(--joy-fontFamily-display)',
                        fontSize: 'clamp(1.6rem, 2.8vw, 2.75rem)',
                        fontWeight: 400,
                        lineHeight: 1.22,
                        letterSpacing: '-0.025em',
                        textWrap: 'balance',
                    }}
                >
                    «Одна вещь, которую я всегда понимал: нужно начинать с опыта клиента
                    и идти в обратную сторону — к технологии. Нельзя начинать с
                    технологии и потом пытаться сообразить, где ты собираешься это
                    продавать.»
                </Typography>
                <Typography
                    sx={{
                        mt: '24px',
                        color: palette.mutedText,
                        fontFamily: 'var(--joy-fontFamily-body)',
                        fontSize: '10px',
                        fontWeight: 500,
                        lineHeight: 1.4,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                    }}
                >
                    © Стив Джобс, WWDC 1997
                </Typography>
            </Box>
        </Box>
    )
}
