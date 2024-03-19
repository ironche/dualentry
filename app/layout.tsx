import type { Metadata } from 'next'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import theme from '~/theme'

export const metadata: Metadata = {
  title: 'DualEntry',
  description: 'The future of accounting',
}

export default function RootLayout(
  props: Readonly<{
    children: React.ReactNode
  }>
) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
