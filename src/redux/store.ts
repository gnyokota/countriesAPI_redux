import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'

// import {FetchState} from '../redux/types/fetchData'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk]
const devtools = compose((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)

const store = createStore(
  rootReducer(),
  devtools(applyMiddleware(...middleware))
)

export default store
