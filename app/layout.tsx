import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { MUITheme } from '~/theme'

export const metadata: Metadata = {
  title: 'DualEntry',
  description: 'The future of accounting',
}

interface RootLayoutProps extends PropsWithChildren {}

export default function RootLayout(props: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <MUITheme>{props.children}</MUITheme>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
