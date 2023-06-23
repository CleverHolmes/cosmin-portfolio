import '../styles/globals.css'

import {MantineProvider} from '@mantine/core'
import {Analytics} from '@vercel/analytics/react'
import type {AppProps} from 'next/app'
import {ThemeProvider} from 'next-themes'
import React from 'react'
import {Footer} from 'src/components/Footer'
import {Header} from 'src/components/Header'
import {fetcher} from 'src/lib/fetcher'
import {SWRConfig} from 'swr'

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <SWRConfig value={{fetcher}}>
        <MantineProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <Analytics />
        </MantineProvider>
      </SWRConfig>
    </ThemeProvider>
  )
}

export default MyApp
