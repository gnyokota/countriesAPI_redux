import { TOGGLE_CART, CartState, ToggleCart } from '../types/drawers'

const initialState: CartState = {
  open: false,
}

const cartReducer = (state = initialState, action: ToggleCart) => {
  switch (action.type) {
  case TOGGLE_CART:
    return {
      ...state,
      open: action.payload,
    }
  default:
    return state
  }
}

export default cartReducer
