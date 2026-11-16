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
                    themeColor: '#f2f2f0'
                },
                background: {
                    body: '#ececec',
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
                    background: '#f2f2f0',
                    text: '#000',
                    mutedText: 'rgba(0, 0, 0, .55)',
                },
                pamyat: {
                    titleColor: '#000',
                },
                about: {
                    titleColor: '#000',
                },
                aquarium: {
                    background: '#f8fafc66',
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
                    themeColor: '#141414'
                },
                background: {
                    body: '#141414',
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
                    background: '#141414',
                    text: '#fff',
                    mutedText: 'rgba(255, 255, 255, .55)',
                },
                pamyat: {
                    titleColor: '#fff',
                },
                about: {
                    titleColor: '#fff',
                },
                aquarium: {
                    background: '#121212dd',
                    postBackground: '#1a1a1a',
                    text: '#fff',
                    mutedText: 'rgba(255, 255, 255, .62)',
                    faintText: 'rgba(255, 255, 255, .45)',
                    postMutedText: 'rgba(255, 255, 255, .42)',
                    verifiedColor: '#0abab5',
                }
            },
        },
    },
})
