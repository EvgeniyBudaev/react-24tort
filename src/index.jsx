import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'normalize.css'
import './index.scss'
import App from "@/frontend/components/app"
import store from '@/frontend/redux/store'

// DEV ONLY!!!
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'))
