import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from '@/frontend/redux/reducers'

const enhancer = applyMiddleware(
  thunk,
)

export default createStore(rootReducer, composeWithDevTools(enhancer))