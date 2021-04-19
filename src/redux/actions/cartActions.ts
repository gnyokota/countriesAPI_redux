import { TOGGLE_CART, ToggleCart } from '../types/drawers'

export const toogleCart = (booleanState: boolean): ToggleCart => {
  return {
    type: TOGGLE_CART,
    payload: booleanState,
  }
}
