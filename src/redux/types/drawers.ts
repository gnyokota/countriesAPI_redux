export const TOGGLE_CART = 'TOOGLE_CART'
export const TOGGLE_THEME = 'TOOGLE_THEME'

export type ToggleCart = {
  type: typeof TOGGLE_CART
  payload: boolean
}

export type CartState = {
  open: boolean
}

export type ToggleTheme = {
  type: typeof TOGGLE_THEME
  payload: boolean
}

export type ThemeState = {
  openTheme: boolean
}
