const YEAR = new Date().getFullYear()

export default {
  navbar: {
    extraContent: (
      <>
        <a href="/projects" style={{ marginLeft: '1rem' }}>Projects</a>
        <a href="/resume" style={{ marginLeft: '1rem' }}>Resume</a>
        <a href="/blog-jp" style={{ marginLeft: '1rem' }}>日本語ブログ</a>
        <a href="/blog-zh" style={{ marginLeft: '1rem' }}>中文博客</a>
      </>
    )
  },
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
