import { extendTheme } from '@mui/joy/styles'

export const theme = extendTheme({
    fontFamily: {
        body: "'Aeonik Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "'TT Ramillas', Georgia, serif",
    },
    colorSchemes: {
        light: {
            palette: {
                head: {
                    themeColor: '#fff'
                },
                background: {
                    body: '#fff',
                },
                header: {
                    borderColor: 'rgba(210, 219, 227, .5)',
                    backgroundColor: 'rgba(255, 255, 255, .8)',
                    boxShadow: 'inset 0 -1px 0 0 rgba(47,43,67,.035),0 1px 3px 0 rgba(47,43,67,.085)'
                },
                navigate: {
                    svgFill: '#c7dff7',
                },
                showBlock: {
                    backgroundColor: 'rgba(255, 255, 255, 0.45)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    glowColor: 'rgba(255, 255, 255, 0.8)',
                },
                quote: {
                    background: '#fff',
                    text: '#000',
                    mutedText: 'rgba(0, 0, 0, .55)',
                },
                aquarium: {
                    background: '#f8fafc',
                    postBackground: '#fff',
                    text: '#000',
                    mutedText: 'rgba(0, 0, 0, .62)',
                    faintText: 'rgba(0, 0, 0, .45)',
                    postMutedText: 'rgba(0, 0, 0, .45)',
                    verifiedColor: '#1d807d',
                },
            },
        },
        dark: {
            palette: {
                head: {
                    themeColor: '#000'
                },
                background: {
                    body: '#000',
                    surface: '#303030',
                    popup: '#242424'
                },
                header: {
                    borderColor: '#3a3a3a',
                    backgroundColor: '#242424cc',
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.3)',
                },
                navigate: {
                    svgFill: '#c7dff7',
                },
                showBlock: {
                    backgroundColor: 'rgba(20, 20, 20, 0.6)',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                    glowColor: 'rgba(255, 255, 255, 0.2)',
                },
                quote: {
                    background: '#000',
                    text: '#fff',
                    mutedText: 'rgba(255, 255, 255, .55)',
                },
                aquarium: {
                    background: '#121212',
                    postBackground: '#1a1a1a',
                    text: '#fff',
                    mutedText: 'rgba(255, 255, 255, .62)',
                    faintText: 'rgba(255, 255, 255, .45)',
                    postMutedText: 'rgba(255, 255, 255, .42)',
                    verifiedColor: '#0abab5',
                },
                neutral: {
                    50: '#fafafa',
                    100: '#f5f5f5',
                    200: '#e5e5e5',
                    300: '#d4d4d4',
                    400: '#a3a3a3',
                    500: '#737373',
                    600: '#525252',
                    700: '#404040',
                    800: '#303030',
                    900: '#1a1a1a',
                },
                primary: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    200: '#bfdbfe',
                    300: '#93c5fd',
                    400: '#60a5fa',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                    800: '#1e40af',
                    900: '#1e3a8a',
                }
            },
        },
    },
})
