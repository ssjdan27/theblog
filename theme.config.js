const YEAR = new Date().getFullYear()

export default {
  navbar: {
    extraContent: (
      <>
        <a href="/projects" style={{ marginLeft: '1rem' }}>Projects</a>
        <a href="/resume" style={{ marginLeft: '1rem' }}>Resume</a>
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
