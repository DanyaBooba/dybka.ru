import { useId } from 'react'
import Box from '@mui/joy/Box'
import { useColorScheme } from '@mui/joy/styles'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import useFancybox from './use-fancybox'

const getSource = (item, dark) => {
    if (typeof item === 'string') return item

    if (dark) return item.dark ?? item.light ?? item.src
    return item.light ?? item.src ?? item.dark
}

export default function ProjectScreenshots({
    items = [],
    layout = 'row',
    aspectRatio,
    altPrefix = 'Скриншот',
    loading = 'lazy',
    sx,
}) {
    const { mode, systemMode } = useColorScheme()
    const dark = mode === 'dark' || (mode === 'system' && systemMode === 'dark')
    const isRow = layout === 'row'
    const isWide = layout === 'wide'
    const galleryId = useId().replaceAll(':', '')

    useFancybox(`[data-fancybox="${galleryId}"]`)

    return (
        <Box
            sx={[
                isRow
                    ? {
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '16px',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        scrollbarWidth: 'none',
                        '&::-webkit-scrollbar': { display: 'none' },
                    }
                    : { display: 'block' },
                ...(sx ? (Array.isArray(sx) ? sx : [sx]) : []),
            ]}
        >
            {items.map((item, index) => {
                const src = getSource(item, dark)
                const alt = typeof item === 'object'
                    ? item.alt ?? `${altPrefix} ${index + 1}`
                    : `${altPrefix} ${index + 1}`

                if (!src) return null

                return (
                    <Box
                        key={`${src}-${index}`}
                        component="a"
                        href={src}
                        data-fancybox={galleryId}
                        data-caption={alt}
                        aria-label={alt}
                        sx={{
                            display: 'block',
                            width: isRow ? 'clamp(190px, 22vw, 300px)' : '100%',
                            maxWidth: isRow ? undefined : isWide ? '100%' : '460px',
                            flexShrink: 0,
                            cursor: 'zoom-in',
                            scrollSnapAlign: isRow ? 'start' : undefined,
                        }}
                    >
                        <Box
                            component="img"
                            src={src}
                            alt={alt}
                            loading={loading}
                            decoding="async"
                            sx={{
                                display: 'block',
                                width: '100%',
                                height: 'auto',
                                aspectRatio: aspectRatio || undefined,
                                borderRadius: '12px',
                            }}
                        />
                    </Box>
                )
            })}
        </Box>
    )
}
