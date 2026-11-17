import { useEffect } from 'react'

/**
 * Красит body и html в цвет страницы, чтобы под фиксированной навигацией
 * и в зоне overscroll не проступал фон темы.
 */
export default function usePageBackground(color) {
    useEffect(() => {
        if (!color) return undefined

        const body = document.body
        const html = document.documentElement
        const previous = {
            bodyColor: body.style.backgroundColor,
            bodyImage: body.style.backgroundImage,
            htmlColor: html.style.backgroundColor,
            htmlImage: html.style.backgroundImage,
        }

        body.style.backgroundColor = color
        body.style.backgroundImage = 'none'
        html.style.backgroundColor = color
        html.style.backgroundImage = 'none'

        return () => {
            body.style.backgroundColor = previous.bodyColor
            body.style.backgroundImage = previous.bodyImage
            html.style.backgroundColor = previous.htmlColor
            html.style.backgroundImage = previous.htmlImage
        }
    }, [color])
}
