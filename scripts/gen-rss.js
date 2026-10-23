const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

const SITE_URL = 'https://danielgarza.dev'

async function generate() {
  const feed = new RSS({
    title: 'Daniel Garza',
    description:
      'Writing from Daniel Garza about software development, mathematics, and language learning.',
    site_url: SITE_URL,
    feed_url: `${SITE_URL}/feed.xml`
  })

  const sections = ['posts', 'blog-jp', 'blog-zh']
  const allPosts = []
  for (const section of sections) {
    const directory = path.join(__dirname, '..', 'pages', section)
    const posts = (await fs.readdir(directory))
      .filter((name) => /\.mdx?$/.test(name) && !name.startsWith('index.'))
    await Promise.all(posts.map(async (name) => {
      const content = await fs.readFile(
        path.join(directory, name)
      )
      const frontmatter = matter(content)

      allPosts.push({
        title: frontmatter.data.title,
        url: `${SITE_URL}/${section}/${name.replace(/\.mdx?$/, '')}`,
        date: frontmatter.data.date,
        description: frontmatter.data.description,
        categories: frontmatter.data.tag ? frontmatter.data.tag.split(', ') : [],
        author: frontmatter.data.author
      })
    }))
  }

  allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))
  allPosts.forEach((post) => {
    feed.item(post)
  })
  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
