import {combineReducers} from 'redux'
import modalWindowReducer from '@/frontend/redux/reducers/modalWindowReducer'

const rootReducer = combineReducers({
  modalWindowReducer,
})

export default rootReducer