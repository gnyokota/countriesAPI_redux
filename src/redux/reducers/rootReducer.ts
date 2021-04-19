import { combineReducers } from 'redux'
import fetchReducer from './fetchDataReducer'
import themeReducer from './themeReducer'
import cartReducer from './cartReducer'

const rootReducer = () =>
  combineReducers({
    data: fetchReducer,
    cart: cartReducer,
    theme: themeReducer,
  })

export default rootReducer
