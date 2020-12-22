import {OPEN_MODAL_WINDOW} from '@/frontend/redux/constants'

const initialState = {
  open: false
}

const modalWindowReducer = (state = initialState, action) => {
  console.log('action', action)
  const {type} = action

  switch (type) {
    case OPEN_MODAL_WINDOW: {
      return {...state, open: true}
    }
    default:
      return state
  }
}

export default modalWindowReducer
