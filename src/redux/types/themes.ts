export const DELETE_FROM_CART = 'DELETE_FROM_CART'
export const TOGGLE_THEME = 'TOOGLE_THEME'

//toggle theme drawer
export type ToggleTheme = {
  type: typeof TOGGLE_THEME
  payload: boolean
}

export type ThemeState = {
  openTheme: boolean
}
