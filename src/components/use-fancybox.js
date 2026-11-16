import { useEffect } from 'react'

const fancyboxOptions = {
    closeButton: false,
    Carousel: {
        Toolbar: {
            display: {
                left: [],
                right: ['toggleFull', 'close'],
            },
        },
    },
}

export default function useFancybox(selector) {
    useEffect(() => {
        if (!selector) return undefined

        let disposed = false
        let unbind

        import('@fancyapps/ui').then(({ Fancybox }) => {
            if (disposed) return
            Fancybox.bind(selector, fancyboxOptions)
            unbind = () => Fancybox.unbind(selector)
        })

        return () => {
            disposed = true
            unbind?.()
        }
    }, [selector])
}
