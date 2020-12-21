import React from 'react'
import styles from './headerTopNavigationSocial.module.scss'

const HeaderTopNavigationSocial = () => {
  return (
    <ul className={styles['header__top-nav__social']}>
      <li>
        <a href="/">
          <i className="fas fa-home"></i>
        </a>
      </li>
      <li>
        <a href="/contacts/">
          <i className="fas fa-map-marker-alt"></i>
        </a>
      </li>
      <li>
        <a href="whatsapp://send?phone=79261673744">
          <i className="fab fa-whatsapp"></i>
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/seleznev_24tort/">
          <i className="fab fa-instagram"></i>
        </a>
      </li>
      <li>
        <a href="tel:+74959873744">
          <i className="fas fa-phone"></i>
        </a>
      </li>
    </ul>
  )
}

export default HeaderTopNavigationSocial
