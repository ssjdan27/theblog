// Next.js skips dependency tracing for pages/404, but Vercel renders the 404
// page in a serverless function, which crashes without its packages (e.g.
// "Cannot find module react-dom"). The 404 page uses the same theme as the
// homepage, so give it the homepage's traced files too.
const fs = require('fs')
const path = require('path')

const pagesDir = path.join(__dirname, '..', '.next', 'server', 'pages')
const notFoundTrace = path.join(pagesDir, '404.js.nft.json')
const homeTrace = path.join(pagesDir, 'index.js.nft.json')

const notFound = JSON.parse(fs.readFileSync(notFoundTrace, 'utf8'))
const home = JSON.parse(fs.readFileSync(homeTrace, 'utf8'))

const files = new Set([...notFound.files, ...home.files])
fs.writeFileSync(notFoundTrace, JSON.stringify({ ...notFound, files: [...files] }))
console.log(`Traced ${files.size} files for the 404 page`)
