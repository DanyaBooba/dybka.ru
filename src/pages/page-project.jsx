import { useEffect } from 'react'
import Box from '@mui/joy/Box'
import Header from '../components/header'

export default function PageProject() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Header />
            <Box
                component="main"
                sx={{
                    position: 'relative',
                    zIndex: 1,
                    minHeight: '100svh',
                }}
            />
        </>
    )
}
