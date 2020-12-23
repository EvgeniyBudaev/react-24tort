import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import modalWindowReducer from '@/frontend/redux/reducers/modalWindowReducer'
import history from '@/history'

const rootReducer = combineReducers({
  router: connectRouter(history),
  modalWindowReducer,
})

export default rootReducer