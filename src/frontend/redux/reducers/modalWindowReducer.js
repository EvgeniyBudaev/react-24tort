import {OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW} from '@/frontend/redux/constants'

const initialState = {
  open: false
}

const modalWindowReducer = (state = initialState, action) => {
  const {type} = action

  switch (type) {
    case OPEN_MODAL_WINDOW: {
      return {...state, open: true}
    }
    case CLOSE_MODAL_WINDOW: {
      return {...state, open: false}
    }
    default:
      return state
  }
}

export default modalWindowReducer
