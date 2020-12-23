import React from 'react'
import {Link} from 'react-router-dom'
import styles from './login.module.scss'
import {handleCloseModalWindow} from '@/frontend/redux/actions/actions'
import {connect} from 'react-redux'

const Login = (props) => {
  const {handleCloseModalWindow} = props
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
            <Link to="/registration" onClick={handleCloseModalWindow}>Регистрация</Link>
          </div>
        </form>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stateModalWindow: state.modalWindowReducer
})

const mapDispatchToProps = ({
  handleCloseModalWindow
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
