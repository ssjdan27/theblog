const YEAR = new Date().getFullYear()

export default {
  navs: [
    {
      url: '/projects',
      name: 'Projects'
    },
    {
      url: '/resume', 
      name: 'Resume'
    },
    {
      url: '/blog-jp',
      name: '日本語ブログ'
    },
    {
      url: '/blog-zh',
      name: '中文博客'
    }
  ],
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Daniel Garza.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
