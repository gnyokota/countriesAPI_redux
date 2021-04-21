import { ToggleTheme, TOGGLE_THEME } from '../types/themes'

export const toogleTheme = (booleanState: boolean): ToggleTheme => {
  return {
    type: TOGGLE_THEME,
    payload: booleanState,
  }
}
