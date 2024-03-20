import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { MuiProvider } from '~/theme'
import { ApiProvider } from '~/api'

export const metadata: Metadata = {
  title: 'DualEntry',
  description: 'The future of accounting',
}

interface Props extends PropsWithChildren {}

export default function RootLayout(props: Readonly<Props>) {
  const { HASURA_PROJECT_ENDPOINT: apiUrl, HASURA_ADMIN_SECRET: apiSecret } = process.env

  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <MuiProvider>
            <ApiProvider {...{ apiUrl, apiSecret }}>{props.children}</ApiProvider>
          </MuiProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
