import React, { useState } from 'react'

import { createMuiTheme } from '@material-ui/core/styles'
import { Theme, MuiThemeProvider } from '@material-ui/core'
import {
  indigo,
  orange,
  red,
  blue,
  purple,
  teal,
} from '@material-ui/core/colors'
import { createContext } from 'react'

const blueTheme = createMuiTheme({
  palette: {
    primary: indigo,
  },
})

const orangeTheme = createMuiTheme({
  palette: {
    primary: orange,
  },
})

const redTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: blue,
  },
})

const purpleTheme = createMuiTheme({
  palette: {
    primary: purple,
  },
})

const tealTheme = createMuiTheme({
  palette: {
    primary: teal,
  },
})

const themes: { [key: string]: Theme } = {
  blueTheme,
  orangeTheme,
  redTheme,
  purpleTheme,
  tealTheme,
}

const getTheme = (theme: string): Theme => {
  return themes[theme]
}

export const ThemeContext = createContext((themeName: string): void => {})

const ThemeProvider = (props: { children: React.ReactChild }) => {
  const [themeName, setThemeName] = useState<string>('blueTheme')
  const theme = getTheme(themeName)
  return (
    <ThemeContext.Provider value={setThemeName}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
