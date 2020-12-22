import {OPEN_MODAL_WINDOW} from '@/frontend/redux/constants'

const initialState = {
  isOpenModalWindow: false
}

const modalWindowReducer = (state = initialState, action) => {
  const {type} = action

  switch (type) {
    case OPEN_MODAL_WINDOW: {
      return state
    }
    default:
      return state
  }
}

export default modalWindowReducer