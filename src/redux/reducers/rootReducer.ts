import { combineReducers } from 'redux'
import fetchReducer from './fetchDataReducer'
const rootReducer = () =>
  combineReducers({
    data: fetchReducer,
  })

export default rootReducer
