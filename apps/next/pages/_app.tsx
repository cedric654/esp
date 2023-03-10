import 'raf/polyfill'

const fixReanimatedIssue = () => {
  // FIXME remove this once this reanimated fix gets released
  // https://github.com/software-mansion/react-native-reanimated/issues/3355
  if (process.browser) {
    // @ts-ignore
    window._frameTimestamp = null
  }
}

fixReanimatedIssue()

import Head from 'next/head'
import React from 'react'

import '../global.css'
import { AppProps } from 'next/app'
import { AppProviders } from 'app/providers/app-providers.web'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Secur</title>
        <meta
          name="description"
          content="Expo + Next.js with Solito. By Fernando Rojo."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppProviders>
        <Component {...pageProps} />
      </AppProviders>
    </>
  )
}

export default MyApp
