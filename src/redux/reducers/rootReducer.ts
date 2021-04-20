import { combineReducers } from 'redux'
import fetchReducer from './fetchCartReducer'
import themeReducer from './themeReducer'

const rootReducer = () =>
  combineReducers({
    data: fetchReducer,
    theme: themeReducer,
  })

export default rootReducer
