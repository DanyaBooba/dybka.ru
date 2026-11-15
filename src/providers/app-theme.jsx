import { CssVarsProvider } from '@mui/joy/styles'
import CssBaseline from '@mui/joy/CssBaseline'
import { theme } from '../theme/theme'

export default function AppTheme({ children }) {
    return (
        <CssVarsProvider theme={theme} defaultMode='system'>
            <CssBaseline />
            {children}
        </CssVarsProvider>
    )
}
