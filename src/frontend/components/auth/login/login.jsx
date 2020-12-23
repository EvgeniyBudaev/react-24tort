import React, {useCallback} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import styles from './login.module.scss'
import {handleCloseModalWindow} from '@/frontend/redux/actions/actions'


const Login = () => {
  const dispatch = useDispatch()

  const closeModal = useCallback(() => dispatch(handleCloseModalWindow()), [dispatch])

  return (
    <div className={styles.login}>
      <div className={styles.login__header}>
        <h3>Вход в личный кабинет</h3>
      </div>
      <div className={styles.login__content}>
        <form>
          <input
            type="text"
            className={styles.login__input}
            placeholder="Телефон"
          />
          <input
            type="text"
            className={styles.login__input}
            placeholder="Пароль"
          />
          <div className={styles.login__btns}>
            <button>Войти</button>
            <Link to="/registration" onClick={closeModal}>Регистрация</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
