import { useState, PropsWithChildren } from 'react'
import { CssBaseline, ThemeProvider, Button } from '@mui/material'
import LightModeIcon from '@mui/icons-material/LightMode'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { lightTheme } from './theme-light'
import { darkTheme } from './theme-dark'

interface Props extends PropsWithChildren {}

export function MuiProvider(props: Readonly<Props>) {
  const [theme, setTheme] = useState(lightTheme)
  const isDarkTheme = theme.palette.mode === 'dark'

  function hadleThemeToggle() {
    setTheme(isDarkTheme ? lightTheme : darkTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Button
          variant="text"
          size="small"
          onClick={hadleThemeToggle}
          startIcon={isDarkTheme ? <LightModeIcon /> : <DarkModeIcon />}
        >
          Toggle theme
        </Button>
      </div>
      {props.children}
    </ThemeProvider>
  )
}
