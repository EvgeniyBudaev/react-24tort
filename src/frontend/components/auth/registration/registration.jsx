import React from 'react'
import styles from './registration.module.scss'

const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className={styles.inner}>
        <form>
          <div className={styles.inputBlock}>
            <label htmlFor="registration__tel">Телефон</label>
            <input type="text" id="registration__tel" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="registration__password">Пароль</label>
            <input type="text" id="registration__password" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="registration__retryPassword">Повтор пароля</label>
            <input type="text" id="registration__retryPassword" />
          </div>
          <div className={styles.buttonBlock}>
            <button>Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Registration
