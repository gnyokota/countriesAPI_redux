import {
  TOGGLE_THEME,
  ToggleTheme,
  ThemeState,
} from '../types/drawersCartTheme'

const initialState: ThemeState = {
  openTheme: false,
}

const themeReducer = (state = initialState, action: ToggleTheme) => {
  switch (action.type) {
  case TOGGLE_THEME:
    return {
      ...state,
      openTheme: action.payload,
    }
  default:
    return state
  }
}

export default themeReducer
