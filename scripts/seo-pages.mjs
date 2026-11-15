import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import projects from '../src/data/projects.js'
import events from '../src/data/events.js'
import { SITE_URL } from '../src/data/seo.js'
const lastmod = new Date().toISOString().slice(0, 10)

export const pages = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/projects', priority: '0.8', changefreq: 'monthly' },
    { path: '/smi', priority: '0.7', changefreq: 'monthly' },
    { path: '/about', priority: '0.5', changefreq: 'yearly' },
    ...projects.map((project) => ({
        path: `/projects/${project.slug}`,
        priority: '0.6',
        changefreq: 'monthly',
    })),
    ...events.map((event) => ({
        path: `/events/${event.link}`,
        priority: '0.7',
        changefreq: 'yearly',
    })),
]

const escapeXml = (value) => value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')

export function generateSeoFiles() {
    const urls = pages.map((page) => `    <url>
        <loc>${escapeXml(`${SITE_URL}${page.path}`)}</loc>
        <lastmod>${lastmod}</lastmod>
        <changefreq>${page.changefreq}</changefreq>
        <priority>${page.priority}</priority>
    </url>`).join('\n')

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

    fs.mkdirSync('public', { recursive: true })
    fs.mkdirSync('scripts', { recursive: true })
    fs.writeFileSync('public/sitemap.xml', sitemap)
    fs.writeFileSync(
        'scripts/react-snap-paths.json',
        `${JSON.stringify(pages.map((page) => page.path), null, 4)}\n`,
    )

    console.log(`sitemap.xml: ${pages.length} URLs`)
    console.log(`react-snap: ${pages.length} paths`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    generateSeoFiles()
}
