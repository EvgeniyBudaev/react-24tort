import React, {useCallback, useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import styles from './login.module.scss'
import {handleCloseModalWindow} from '@/frontend/redux/actions/actions'
import {ROUTES} from '@/frontend/routes'
import Inputmask from "inputmask";
import axios from 'axios'

const Login = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const closeModal = useCallback(() => dispatch(handleCloseModalWindow()), [dispatch])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handleSubmit', login, password)
  }

  useEffect(() => {
    // Маска для поля ввода телефона
    const selector = document.getElementById("login__input")
    const im = new Inputmask("+7(999)-999-99-99")
    im.mask(selector)

    axios(`https://24tort.ru/api/AccountAPI/ShopperAuthentication`, {
      method: 'POST',
      data: {
          login: "+7(444)444-44-44",
          password: "12345"
      }
    })
  }, [])

  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <h3>Вход в личный кабинет</h3>
      </div>
      <div className={styles.content}>
        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            id="login__input"
            className={styles.input}
            placeholder="Телефон"
            value={login}
            onChange={event => setLogin(event.target.value)}
          />
          <input
            type="text"
            className={styles.input}
            placeholder="Пароль"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <div className={styles.btns}>
            <button type={'submit'}>Войти</button>
            <Link to={ROUTES.REGISTRATION} onClick={closeModal}>Регистрация</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
