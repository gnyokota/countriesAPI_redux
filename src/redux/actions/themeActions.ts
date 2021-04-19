import { ToggleTheme, TOGGLE_THEME } from '../types/drawers'

export const toogleTheme = (booleanState: boolean): ToggleTheme => {
  return {
    type: TOGGLE_THEME,
    payload: booleanState,
  }
}
