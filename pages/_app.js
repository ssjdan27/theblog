import 'nextra-theme-blog/style.css'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/react"
import { Noto_Sans_JP } from 'next/font/google'

import '../styles/main.css'

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <div className={notoSansJP.className}>
        <Component {...pageProps} />
      </div>
      <Analytics />
    </>
  )
}
