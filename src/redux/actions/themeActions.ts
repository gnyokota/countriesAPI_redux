import { ToggleTheme, TOGGLE_THEME } from '../types/drawersCartTheme'

export const toogleTheme = (booleanState: boolean): ToggleTheme => {
  return {
    type: TOGGLE_THEME,
    payload: booleanState,
  }
}
