import React from 'react'
import {Link} from 'react-router-dom'
import styles from './login.module.scss'

const Login = () => {
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
            <Link to="/registration">Регистрация</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login