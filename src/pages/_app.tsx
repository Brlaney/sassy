import * as React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import '@/styles/globals.scss'


export default function MyApp (props: AppProps) {
  const { Component, pageProps } = props
  const router = useRouter()

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='keywords' content='Scss, sass, next.js, react' />
        <meta name='description' content='A Next.js app with Sass' />
        <title>Sassy | Next</title>
      </Head>
      <AnimatePresence>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}
