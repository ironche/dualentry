import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { MuiProvider } from '~/theme'

export const metadata: Metadata = {
  title: 'DualEntry',
  description: 'The future of accounting',
}

interface Props extends PropsWithChildren {}

export default function RootLayout(props: Readonly<Props>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <MuiProvider>{props.children}</MuiProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
