import fs from 'node:fs'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const { run } = require('react-snap')

const pathsFile = 'scripts/react-snap-paths.json'

if (!fs.existsSync(pathsFile)) {
    console.error(`Не найден ${pathsFile}. Сначала запусти npm run seo.`)
    process.exit(1)
}

const include = JSON.parse(fs.readFileSync(pathsFile, 'utf8'))
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

try {
    await run({
        source: 'dist',
        destination: 'dist',
        include,
        crawl: false,
        publicPath: '/',
        fixWebpackChunksIssue: false,
        puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
        ...(fs.existsSync(chromePath) ? { puppeteerExecutablePath: chromePath } : {}),
        viewport: { width: 1440, height: 900 },
        waitFor: 800,
        skipThirdPartyRequests: true,
    })
    console.log(`react-snap: ${include.length} pages prerendered`)
} catch (error) {
    console.error(error)
    process.exit(1)
}
