const remarkMath = require('remark-math')
const rehypeKatex = require('rehype-katex')

const withNextra = require('nextra')({
  theme: 'nextra-theme-blog',
  themeConfig: './theme.config.js',
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
})

module.exports = withNextra({
  webpack(config, { dev }) {
    // Nextra embeds the page map (nav titles) in every compiled page, but a
    // cached page isn't recompiled when another page's front matter changes.
    // Skip the persistent build cache so nav labels never go stale.
    if (!dev) config.cache = false
    return config
  },
})