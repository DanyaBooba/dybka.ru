import { useEffect } from 'react'
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import { theme } from '../theme/theme'

function ThemeColorMeta() {
    const { mode, systemMode } = useColorScheme()
    const activeMode = mode === 'system' ? systemMode : mode

    useEffect(() => {
        const meta = document.querySelector("meta[name='theme-color']")
        const themeColor = theme.colorSchemes[activeMode]?.palette.head.themeColor

        if (meta && themeColor) {
            meta.setAttribute('content', themeColor)
        }
    }, [activeMode])

    return null
}

export default function AppTheme({ children }) {
    return (
        <CssVarsProvider theme={theme} defaultMode='system'>
            <CssBaseline />
            <ThemeColorMeta />
            {children}
        </CssVarsProvider>
    )
}
