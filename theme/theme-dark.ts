import { Roboto } from 'next/font/google'
import { createTheme, ThemeOptions, Components } from '@mui/material/styles'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    grey: {
      300: '#e0e0e0',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    }
  },
}

const themeComponents: Components = {
  MuiTextField: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
        backgroundColor: themeOptions.palette?.background?.default,
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        paddingLeft: 8,
      },
      notchedOutline: {
        borderColor: 'transparent !important',
      },
    },
  },
  MuiButton: {
    defaultProps: {
      color: 'inherit',
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
      },
      outlined: {
        backgroundColor: themeOptions.palette?.background?.default,
        border: `1px solid ${themeOptions.palette?.grey?.[300]}`,
      },
    },
  },
}

export const darkTheme = createTheme({
  ...themeOptions,
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    ...themeComponents,
  },
})
