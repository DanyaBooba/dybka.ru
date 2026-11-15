import { useLayoutEffect } from 'react'
import {
    DEFAULT_DESCRIPTION,
    DEFAULT_IMAGE,
    DEFAULT_KEYWORDS,
    DEFAULT_TITLE,
    PERSON_NAME,
    SITE_NAME,
    SITE_URL,
} from '../data/seo'

function setMeta(attribute, key, content) {
    let element = document.head.querySelector(`meta[${attribute}="${key}"]`)

    if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.appendChild(element)
    }

    element.setAttribute('content', content)
}

function setCanonical(href) {
    let element = document.head.querySelector('link[rel="canonical"]')

    if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        document.head.appendChild(element)
    }

    element.setAttribute('href', href)
}

function setJsonLd(jsonLd) {
    const id = 'seo-json-ld'
    let element = document.getElementById(id)

    if (!jsonLd) {
        if (element) element.remove()
        return
    }

    const payload = Array.isArray(jsonLd)
        ? { '@context': 'https://schema.org', '@graph': jsonLd }
        : { '@context': 'https://schema.org', ...jsonLd }

    if (!element) {
        element = document.createElement('script')
        element.id = id
        element.type = 'application/ld+json'
        document.head.appendChild(element)
    }

    element.textContent = JSON.stringify(payload)
}

export default function Seo({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    keywords = DEFAULT_KEYWORDS,
    path = '/',
    image = DEFAULT_IMAGE,
    imageAlt = SITE_NAME,
    type = 'website',
    noindex = false,
    jsonLd,
}) {
    const normalizedPath = path === '/' ? '/' : path.replace(/\/+$/, '')
    const canonical = `${SITE_URL}${normalizedPath}`
    const imageUrl = image.startsWith('http')
        ? image
        : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`

    useLayoutEffect(() => {
        document.title = title
        setMeta('name', 'description', description)
        setMeta('name', 'keywords', keywords)
        setMeta('name', 'author', PERSON_NAME)
        setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
        setCanonical(canonical)

        setMeta('property', 'og:type', type)
        setMeta('property', 'og:locale', 'ru_RU')
        setMeta('property', 'og:site_name', SITE_NAME)
        setMeta('property', 'og:title', title)
        setMeta('property', 'og:description', description)
        setMeta('property', 'og:url', canonical)
        setMeta('property', 'og:image', imageUrl)
        setMeta('property', 'og:image:alt', imageAlt)

        setMeta('name', 'twitter:card', 'summary_large_image')
        setMeta('name', 'twitter:title', title)
        setMeta('name', 'twitter:description', description)
        setMeta('name', 'twitter:image', imageUrl)
        setMeta('name', 'twitter:image:alt', imageAlt)

        setJsonLd(jsonLd)
    }, [title, description, keywords, canonical, imageUrl, imageAlt, type, noindex, jsonLd])

    return null
}
