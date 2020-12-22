import {OPEN_MODAL_WINDOW, CLOSE_MODAL_WINDOW} from '@/frontend/redux/constants'

export const handleOpenModalWindow = () => ({
  type: OPEN_MODAL_WINDOW
})

export const handleCloseModalWindow = () => ({
  type: CLOSE_MODAL_WINDOW
})
