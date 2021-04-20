import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

import { AppState } from '../redux/types/fetchCart'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk]
const devtools = compose((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

const initialState: AppState = {
  data: {
    pending: false,
    countries: [],
    error: null,
    searchField: '',
    filteredCountries: [],
    open: false,
    inCart: [],
  },
  theme: {
    openTheme: false,
  },
}

const store = createStore(
  rootReducer(),
  initialState,
  devtools(applyMiddleware(...middleware))
)

export default store
